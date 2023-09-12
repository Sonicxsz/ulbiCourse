import { Country, Currency } from "shared/types/common"

export interface ProfileType {
    first: string,
    lastname: string,
    age: number,
    currency: Currency,
    country: Country,
    city: string,
    username: string,
    avatar: string
}


export interface ProfileSchema {
    profile: ProfileType,
    isLoading: boolean,
    error: string,
}