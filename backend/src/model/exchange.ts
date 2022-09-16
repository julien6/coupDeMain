import { Service } from "./service";

/**
 * This class allow to contract the exchange between the applicant and the proposer
 */
export class Exchange {

    // the contract (fully detailed) service the applicant wants
    contractedServices: Service[]

    // the way the proposer wants to be paid with a combination of another contract service
    // or/and more or less money to make up
    payment: { contractedService: Service[], money: number }

    constructor(contractedServices: Service[], payment: { contractedService: Service[], money: number }) {
        contractedServices = contractedServices
        payment = payment
    }
}