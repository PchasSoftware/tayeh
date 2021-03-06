import { Base, Pagination } from "../base";
import { customer, AddToCartBody, ToggleFavorite, UpdateCartItem, UpdateCustomer, NewAddress, UpdateAddress } from "./types";
export declare class Customer extends Base {
    getPassword(username: string, instance_id: number): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    customerVerify(usename: string, password: string, instance_id: number): Promise<import("axios").AxiosResponse<{
        access_token: any;
    }>>;
    getCustomerMe(): Promise<import("axios").AxiosResponse<customer>>;
    getCustomer(): Promise<import("axios").AxiosResponse<customer>>;
    updateCustomer(body: UpdateCustomer): Promise<import("axios").AxiosResponse<any>>;
    addProductToCart(body: AddToCartBody): Promise<import("axios").AxiosResponse<any>>;
    toggleProductFavorite(body: ToggleFavorite): Promise<import("axios").AxiosResponse<any>>;
    getCustomerCart(): Promise<import("axios").AxiosResponse<any>>;
    updateCartItem(body: UpdateCartItem): Promise<import("axios").AxiosResponse<any>>;
    deleteCartItem(cart_item_id: string): Promise<import("axios").AxiosResponse<any>>;
    getNotifications(params?: Pagination): Promise<import("axios").AxiosResponse<any>>;
    getFavorites(params: Pagination): Promise<import("axios").AxiosResponse<any>>;
    getAddresses(): Promise<import("axios").AxiosResponse<any>>;
    createAddress(body: NewAddress): Promise<import("axios").AxiosResponse<any>>;
    updateAddress(body: UpdateAddress): Promise<import("axios").AxiosResponse<any>>;
    deleteAddress(address_id: string): Promise<import("axios").AxiosResponse<any>>;
}
