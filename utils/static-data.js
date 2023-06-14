export const sortOptions = [
    {label: "Old to new", value: "createdAt-asc"},
    {label: "New to old", value: "createdAt-desc"},
    {label: "Price height to low", value: "price-desc"},
    {label: "Price low to High", value: "price-asc"},
];

export const initialFilterParams = {
    page: 1,
    limit: 12,
    brand: null,
    model: null,
    sort: null,
};