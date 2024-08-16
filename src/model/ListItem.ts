export interface Item {
   id: string
   details: string
   checked: boolean
}

export default class ListItem implements Item {
   constructor(
      private _id: string = '',
      private _details: string = '',
      private _checked: boolean = false
   ) {}

   get id(): string {
      return this._id
   }

   set id(id: string) {
      this._id = id
   }

   get details():string {
      return this._details
   }

   set details(details: string) {
      this._details = details
   }

   get checked(): boolean {
      return this._checked
   }

   set checked(checked: boolean) {
      this._checked = checked
   }
}