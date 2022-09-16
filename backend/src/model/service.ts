export class Service {

    keyWords: string[]

    // what it is about to do ? Why ?
    aimDescription: string

    // what is the person profile wanted for ?
    // is he/she experienced, skilled, etc.
    userDescription: string

    // when should it be done ?
    temporalDescription: string

    // where should it be done ?
    locationDescription: string

    // how should it be done ?
    meanDescription: string

    // this is used to compare services between each other and whether extra money is suggested to make up
    // it comprises things like difficulty, arduousness, etc.
    value: number

    constructor(
        keyWords: string[],
        aimDescription: string,
        userDescription: string,
        temporalDescription: string,
        locationDescription: string,
        meanDescription: string,
        value: number) {

        this.keyWords = keyWords
        this.aimDescription = aimDescription
        this.userDescription = userDescription
        this.temporalDescription = temporalDescription
        this.locationDescription = locationDescription
        this.meanDescription = meanDescription
        this.value = value
    }

}