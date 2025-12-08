import { useEffect, useState } from "react";
import { CgCloseO } from "react-icons/cg";

import {
    basicData,
    featuresData,
    specificationsFields,
} from "./constants";


import { addCar, updateCarDetails, updateCarHoldStatus, uploadImage } from "../../api";

import { ImageInput } from "./ImageInput";
import { Dropdown } from "../Dropdown";

const CarDetailForm = ({ carDetails = {}, handleClose = () => { } }) => {
    const [features, setFeatures] = useState({});
    const [specs, setSpecs] = useState({});
    const [basicDetails, setBasicDetails] = useState({});
    const [missingBasicDetails, setMissingBasicDetails] = useState([])
    const [images, setImages] = useState({
        interior: [],
        exterior: [],
        tyres: [],
    });
    const [imageUrls, setImageUrls] = useState({
        interior: [],
        exterior: [],
        tyres: [],
    });
    const [thumbNailImage, setThumbNailImage] = useState("");

    useEffect(() => {
        const { thumbnail, features, specifications, images, ...basicData } = carDetails;
        setBasicDetails(basicData);
        setThumbNailImage(thumbnail);
        setFeatures(features);
        setSpecs(specifications);
        setImageUrls(images);
    }, [carDetails])


    const handleFeatureChange = (category, feature, value) => {
        setFeatures((prev) => {
            const updated = { ...prev };
            if (!updated[category]) updated[category] = [];
            if (value === "yes") {
                updated[category] = [...new Set([...updated[category], feature])];
            } else {
                updated[category] = updated[category].filter(
                    (item) => item !== feature
                );
            }
            return updated;
        });
    };

    const handleSpecChange = (category, key, value) => {
        setSpecs((prev) => {
            const updated = { ...prev }
            if (!updated[category]) updated[category] = {}
            updated[category][key] = value
            return updated
        })
    };

    const handleBasicDetailChange = (e, isNumber = false, fieldName = '') => {
        if (missingBasicDetails?.length) {
            setMissingBasicDetails([])
        }
        const { name, value } = e.target;
        setBasicDetails((prev) => ({ ...prev, [name || fieldName]: isNumber ? Number(value) : value }));
    };

    const validateBasicDetails = () => {
        const errors = [];
        if (!thumbNailImage) errors.push("Thumbnail")
        basicData.forEach(({ name, isMandatory = false, label = '' }) => {
            if (isMandatory) {
                const val = basicDetails[name];
                if (val === undefined || val === null || String(val).trim() === '') {
                    errors.push(label)
                }
            }
        });
        if (errors?.length > 0) {
            setMissingBasicDetails(errors)
            return false
        }
        return true
    }

    const handleImageUpload = (e, type) => {
        const files = Array.from(e.target.files);
        setImages((prev) => ({ ...prev, [type]: files }));
    };

    const uploadImagesByCategory = async (category) => {
        try {
            const selectedFiles = images[category];
            if (!selectedFiles || selectedFiles.length === 0) return;


            const formData = new FormData();
            selectedFiles.forEach((file) => {
                formData.append("images", file);
            });

            const imageUploadResponse = await uploadImage(formData, false);
            const uploadedUrls = imageUploadResponse?.data?.imageUrls || [];

            return uploadedUrls;

            // setImageUrls((prev) => ({ ...prev, [category]: uploadedUrls }));
        } catch (error) {
            console.log('Error while uploading images by category', error);
        }
    };

    const handleUploadThumbNailImage = async (e) => {
        const file = e.target.files[0];
        if (!file) return;
        try {
            const formData = new FormData();
            formData.append("image", file);
            const uploadResponse = await uploadImage(formData);
            const url = uploadResponse?.data?.imageUrl;
            setThumbNailImage(url);
        } catch (error) {
            console.log('Error while uploading thumbnail image', error);
        }
    };

    const handleSubmit = async () => {
        if (validateBasicDetails()) {
            // Upload images
            const uploadedImageUrls = { ...imageUrls };
            if (images.interior.length > 0 || images.exterior.length > 0 || images.tyres.length > 0) {

                for (const category of ["interior", "exterior", "tyres"]) {
                    if (images[category].length > 0) {
                        const uploadedUrls = await uploadImagesByCategory(category);
                        uploadedImageUrls[category] = [...(uploadedImageUrls[category] || []), ...uploadedUrls];
                    }
                }
            }

            // Create payload
            const payload = {
                ...basicDetails,
                thumbnail: thumbNailImage,
                features: features,
                specifications: specs,
                images: uploadedImageUrls,
            };
            // Decide to add or update car details
            if (carDetails?.id) {
                // eslint-disable-next-line no-unused-vars
                const { updated_at, ...rest } = payload;
                handleUpdateCarDetails(rest)
            }
            else {
                handleAddCar(payload)
            }
        }
    };

    const handleUpdateCarDetails = async (carDetails) => {
        try {
            await updateCarDetails(carDetails)
        }
        catch (error) {
            console.log('Error while adding', error)
        }
        finally {
            handleClose()
        }
    }

    const handleAddCar = async (carData) => {
        try {
            await addCar(carData)
        }
        catch (error) {
            console.log('Error while adding', error)
        } finally {
            handleClose()
        }
    }

    const handleHoldStatusChange = async (e) => {
        try {
            await updateCarHoldStatus(carDetails?.id, e.target.checked);
        } catch (error) {
            console.log('Error while updating hold status', error)
        } finally {
            handleClose()
        }
    }

    return (
        <div className="p-4 h-[90vh] w-[90vw] sm:w-[80vw] mx-auto bg-white rounded shadow relative">
            <div className="pb-10 max-h-full overflow-y-auto">
                {/* Basic details */}
                <h2 className="text-lg font-semibold mb-2">Basic Car Details</h2>
                <div className="flex items-start">
                    <div>
                        {thumbNailImage ? (
                            <>
                                <img
                                    id="thumbnail"
                                    src={thumbNailImage}
                                    alt={`thumbnail-image`}
                                    className="w-32 h-auto object-cover rounded border"
                                    loading="lazy"
                                />
                                <ImageInput
                                    label="Update image"
                                    id="thumbnailInput"
                                    onImageChange={handleUploadThumbNailImage}
                                />
                            </>
                        ) :
                            <ImageInput
                                label="Upload thumbnail image"
                                id="thumbnailInput"
                                onImageChange={handleUploadThumbNailImage}
                            />
                        }
                    </div>
                    {carDetails?.id && <div className="flex items-center gap-x-2 flex-1 justify-center">
                        <input type="checkbox" checked={carDetails?.is_on_hold} name="hold-status" id="hold-status" className="w-5 h-5" onChange={handleHoldStatusChange} />
                        <span className="text-xl"> In discussion with customer</span>
                    </div>
                    }
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {basicData.map(({ label, name, isNumber = false, placeHolder = '', isDropdown = false, options = [] }) => (
                        <div key={name} className="flex flex-col">
                            {isDropdown ? (
                                <Dropdown
                                    label={label}
                                    options={options}
                                    defaultValue={basicDetails[name] || ""}
                                    onChange={(e) => handleBasicDetailChange(e, isNumber, name)}
                                    isMandatory={true}
                                />
                            ) :
                                <>
                                    <label htmlFor={name} className="text-sm font-medium mb-1">
                                        {label}<span className="text-red-600">*</span>
                                    </label>
                                    <input
                                        type="text"
                                        id={name}
                                        name={name}
                                        placeholder={placeHolder}
                                        className="border-2 p-2 rounded-lg border-gray-400 focus:outline-blue-500"
                                        onChange={(e) => handleBasicDetailChange(e, isNumber)}
                                        value={basicDetails[name] || ""}
                                    />
                                </>
                            }
                        </div>
                    ))}
                </div>
                {/* Images */}
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mt-4">
                    {["interior", "exterior", "tyres"].map((type) => (
                        <div key={type} className="flex flex-col">
                            <label className="text-sm font-medium mb-1 capitalize">
                                {type} Images
                            </label>
                            <ImageInput
                                label={`${(images?.[type]?.length || imageUrls?.[type]?.length) ? 'Update' : 'Select'} ${type} images`}
                                id={`${type}ImageInput`}
                                onImageChange={(e) => handleImageUpload(e, type)}
                                shouldAllowMultiple={true}
                            />
                            <div className="grid grid-cols-3 gap-2">
                                {imageUrls?.[type]?.map((url, idx) => (
                                    <div className="relative">
                                        <div className="absolute top-[-5px] right-[-5px] cursor-pointer bg-amber-50 rounded-full text-red-600">
                                            <CgCloseO
                                                onClick={() => {
                                                    setImageUrls((prev) => ({
                                                        ...prev,
                                                        [type]: prev[type].filter(
                                                            (_, index) => index !== idx
                                                        ),
                                                    }));
                                                }}

                                            />
                                        </div>
                                        <img
                                            key={idx}
                                            src={url}
                                            alt={`${type}-${idx}`}
                                            className="w-full h-20 object-cover rounded border"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                                {images?.[type]?.map((file, idx) => (
                                    <div className="relative">
                                        <div className="absolute top-[-5px] right-[-5px] cursor-pointer text-red-600 bg-amber-50 rounded-full">
                                            <CgCloseO
                                                onClick={() => {
                                                    setImages((prev) => ({
                                                        ...prev,
                                                        [type]: prev[type].filter(
                                                            (_, index) => index !== idx
                                                        ),
                                                    }));
                                                }}

                                            />
                                        </div>
                                        <img
                                            key={idx}
                                            src={URL.createObjectURL(file)}
                                            alt={`${type}-${idx}`}
                                            className="w-full h-20 object-cover rounded border"
                                            loading="lazy"
                                        />
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
                <h2 className="text-xl font-bold mb-1 mt-4">
                    Car Feature & Specification Form
                </h2>
                {/* Features */}
                <div>
                    <h3 className="text-lg font-semibold">Features</h3>
                    {Object.entries(featuresData).map(([category, items]) => (
                        <div key={category} className="mb-6">
                            <h4 className="font-semibold text-blue-600 mt-2 capitalize">
                                {" "}
                                {category.replace(/-/g, " ")}
                            </h4>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-10 gap-y-4">
                                {items?.map(({ label, value }) => {

                                    return <div key={value} className="flex items-center gap-2">
                                        <label className="w-full">{label}</label>
                                        <label className="flex items-center gap-1">
                                            Yes
                                            <input
                                                type="radio"
                                                name={`${category}-${value}`}
                                                checked={features?.[category]?.includes(value)}
                                                value="yes"
                                                onChange={() =>
                                                    handleFeatureChange(category, value, "yes")
                                                }
                                            />
                                        </label>
                                        <label className="flex items-center gap-1">
                                            No
                                            <input
                                                type="radio"
                                                name={`${category}-${value}`}
                                                value="no"
                                                onChange={() =>
                                                    handleFeatureChange(category, value, "no")
                                                }
                                            />
                                        </label>
                                    </div>
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Specifications */}
                <div>
                    <h3 className="text-lg font-semibold">Specifications</h3>
                    {Object.entries(specificationsFields).map(([sectionKey, fields]) => (
                        <div key={sectionKey} className="border rounded-lg p-4 shadow my-2">
                            <h2 className="text-lg font-semibold mb-4 capitalize">
                                {sectionKey.replace(/-/g, " ")}
                            </h2>
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                                {fields.map(({ label, value, placeHolder = '', isDropdown = false, options = [] }) => (
                                    <div key={value} className="flex flex-col">
                                        {
                                            isDropdown ? (
                                                <Dropdown
                                                    label={label}
                                                    options={options}
                                                    defaultValue={specs?.[sectionKey]?.[value] || ""}
                                                    onChange={(e) => handleSpecChange(sectionKey, value, e.target.value)}
                                                />
                                            ) :
                                                <>
                                                    <label htmlFor={value} className="text-sm font-medium mb-1">
                                                        {label}
                                                    </label>
                                                    <input
                                                        type="text"
                                                        id={value}
                                                        name={value}
                                                        placeholder={placeHolder}
                                                        className="border-2 border-gray-400 p-2 rounded-lg focus:outline-blue-500"
                                                        onChange={(e) => handleSpecChange(sectionKey, value, e.target.value)}
                                                        value={specs?.[value] || specs?.[sectionKey]?.[value] || ""}
                                                    />
                                                </>
                                        }
                                    </div>
                                ))}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <div className="w-full px-4 py-2 border-t border-gray-400 absolute bottom-0 left-0 right-0 bg-white flex items-center justify-between">
                {
                    missingBasicDetails?.length > 0 && <p className="text-red-600">*Missing fields: {missingBasicDetails?.join(', ')}</p>
                }
                <button
                    onClick={handleSubmit}
                    className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 min-w-28 cursor-pointer ml-auto"
                >
                    {carDetails?.id ? 'Update' : 'Add'}
                </button>
            </div>
        </div>
    );
};

export default CarDetailForm;
