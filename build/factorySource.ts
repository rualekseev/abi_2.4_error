const sampleAbi = {"ABIversion":2,"version":"2.7","header":["pubkey","time","expire"],"functions":[{"name":"constructor","inputs":[{"name":"_state","type":"uint256"}],"outputs":[]},{"name":"setState","inputs":[{"name":"_state","type":"uint256"}],"outputs":[]},{"name":"getDetails","inputs":[],"outputs":[{"name":"_state","type":"uint256"}]}],"getters":[],"events":[{"name":"StateChange","inputs":[{"name":"_state","type":"uint256"}],"outputs":[]}],"fields":[{"init":true,"name":"_pubkey","type":"uint256"},{"init":false,"name":"_timestamp","type":"uint64"},{"init":false,"name":"_constructorFlag","type":"bool"},{"init":true,"name":"_nonce","type":"uint16"},{"init":false,"name":"state","type":"uint256"}]} as const

export const factorySource = {
    Sample: sampleAbi
} as const

export type FactorySource = typeof factorySource
export type SampleAbi = typeof sampleAbi
