
import { getProductById, getAllProducts } from "../src/database.js";
import { ProductService } from "../src/product-service.js";

jest.mock("../src/database.js", () => {
    const originalModule = jest.requireActual("../src/database.js");
 
    return {
        __esModule: true,
        ...originalModule,
        getAllProducts: jest.fn()
    }
});

test.failing("mock modules getProductById", () => {
    ProductService.findById(1);
});

test("mock modules getAllProducts", () => {
    const product = [
        {
            id: 1,
            name: "Product Mock",
        },
        {
            id: 2,
            name: "Product Mock",
        },
    ];

    getAllProducts.mockImplementation(() => {
        return product;
    });

    expect(ProductService.findAll()).toEqual(product);
});
