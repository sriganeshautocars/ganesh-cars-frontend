import { useCarDataStore } from '../../store/useAppStore';
import { Dropdown } from '../Dropdown';

const SortCars = () => {
    // Select each piece of state individually for stability
    const sortOptions = useCarDataStore((state) => state.sortOptions);
    const selectedSort = useCarDataStore((state) => state.selectedSort);
    const setSortOption = useCarDataStore((state) => state.setSortOption);

    const handleSortChange = (e) => {
        if (setSortOption) { // Ensure setSortOption is available
            setSortOption(e.target.value);
        }
    };

    if (!sortOptions || sortOptions.length === 0) {
        return null; // Or a loading/default state
    }

    return (
        <div className="w-52">
            <Dropdown
                options={sortOptions}
                selectedOption={selectedSort}
                defaultValue={sortOptions[2]?.value}
                onChange={handleSortChange}
            />
        </div>
    );
};

export default SortCars;