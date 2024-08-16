import ListItem from "./ListItem";

interface List {
   list: ListItem[],
   addItem(item: ListItem): void,
   removeItem(id: string): void,
   save(): void,
   load(): void,
   clearList(): void
}

export default class FullList implements List {
   
   static instance: FullList = new FullList()
   
   constructor (
      private _list:ListItem[] = []
   ) {}

   get list(): ListItem[] {
      return this._list
   }

   addItem(item: ListItem): void {
      this._list.push(item)
      this.save()
   }

   removeItem(id: string): void {
      this._list = this._list.filter(item => item.id != id)
      this.save()
   }

   save(): void {
      localStorage.setItem("todoList", JSON.stringify(this._list))
   }

   load(): void {
      const storedList: string | null = localStorage.getItem("todoList")

      if (typeof storedList !== "string") {
         return
      }

      const data: { _id: string , _details: string, _checked: boolean }[] = JSON.parse(storedList)
      data.forEach(obj => {
         const item = new ListItem(obj._id, obj._details, obj._checked)
         FullList.instance.addItem(item)
      });
   }

   clearList(): void {
      this._list = []
      this.save()
   }
}