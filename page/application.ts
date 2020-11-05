import { CreateAccount } from "./createAccount.page";
import { Home } from "./home.page";

export class Application {
    public Home = Home
    public CreateAccount = CreateAccount
}

export const APP = new Application()