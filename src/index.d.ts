import { Media } from "./media";
import { Instance } from "./instance";
import { User } from "./user";
import { Customer } from "./customer";
import { Crm } from "./crm";
import { Product } from "./product";
import { Countries } from "./countries";
import { Base } from "./base";
declare class Tayeh extends Base {
}
interface Tayeh extends Instance, User, Media, Customer, Crm, Product, Countries {
}
export default Tayeh;
