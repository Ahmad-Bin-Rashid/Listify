import FullList from "./model/FullList"
import ListItem from "./model/ListItem"
import ListTemplate from "./template/ListTemplate"

const initApp = () => {
  const fullList = FullList.instance
  const template = ListTemplate.instance

  const form = document.getElementById("itemEntryForm") as HTMLFormElement
  const input = document.getElementById("newItem") as HTMLInputElement
  const clearButton = document.getElementById("clearItemsButton") as HTMLButtonElement

  form.addEventListener("submit", (e: SubmitEvent) => {
    e.preventDefault()

    const inputValue: string = input.value.trim()

    if (!inputValue) {
      return
    }

    const itemId: number = fullList.list.length ? parseInt(fullList.list[fullList.list.length - 1].id + 1) : 1

    const newItem: ListItem = new ListItem(itemId.toString(), inputValue, false)

    fullList.addItem(newItem)
    template.render(fullList)
    input.value = ''
  })

  clearButton.addEventListener("click", () => {
    fullList.clearList()
    template.clear()
  })

  fullList.load()
  template.render(fullList)

}

document.addEventListener("DOMContentLoaded", initApp)