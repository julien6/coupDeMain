import { Exchange } from "./exchange"
import { Service } from "./service"

export class User {
    // description of the user : is he/she skilled, motivated to help, etc.
    description: string
    firstName: string
    lastName: string
    birthDate: string
    postalAdress: string
    mailAdress: string
    cellphoneNumber: string

    // abstract services he/she proposed (equivalent to skills)
    // they are generally very short and general, ex : cutting grass, painting walls, repairing computer, etc.
    proposedServices: Service[]

    // instantied, determined services he/she wants
    // they are very detailed, ex: cutting grass from 4:00 P.M to 6:00 P.M in my house garden located at...
    wantedServices: Service[]

    // list of completed service, it is used to change user statistics
    completedServices: { service: Service, comment: { satisfactionLevel: number; text: string } }[]

    // statistics about the user
    experienceLevel: number
    reputationLevel: number

    constructor(
        description: string,
        firstName: string,
        lastName: string,
        birthDate: string,
        postalAdress: string,
        mailAdress: string,
        cellphoneNumber: string) {

        this.description = description
        this.firstName = firstName
        this.lastName = lastName
        this.birthDate = birthDate
        this.postalAdress = postalAdress
        this.mailAdress = mailAdress
        this.cellphoneNumber = cellphoneNumber
    }

    public addProposedService(service: Service) {
        this.proposedServices.push(service)
    }

    public addWantedService(service: Service) {
        this.proposedServices.push(service)
    }

}