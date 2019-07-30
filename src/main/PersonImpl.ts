// eslint-disable-next-line no-unused-vars
import Person from './Person'
import { NameableTrait } from './NameableTrait'

export default class PersonImpl extends NameableTrait implements Person {
    private created: Date;

    public constructor (name?: string, created: Date = new Date()) {
      super()
      this.name = name
      this.created = new Date(created.getTime())
    }
}
