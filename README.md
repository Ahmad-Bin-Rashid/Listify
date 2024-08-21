# Listify

Listify is a simple to-do list app built with Vite, TypeScript, and vanilla DOM APIs. It lets you add items, mark them as complete, remove individual items, and clear the full list. Your list is saved in `localStorage`, so it stays available after a refresh.

## Features

- Add new list items
- Mark items as complete with a checkbox
- Remove a single item
- Clear the entire list
- Persist data in the browser with `localStorage`
- Responsive layout for desktop and mobile

## Tech Stack

- Vite
- TypeScript
- HTML
- CSS

## Getting Started

### Prerequisites

- Node.js 18 or newer
- npm

### Install

```bash
npm install
```

### Run locally

```bash
npm run dev
```

### Build for production

```bash
npm run build
```

### Preview the production build

```bash
npm run preview
```

## Project Structure

```text
index.html
package.json
src/
	main.ts
	css/
		style.css
	model/
		FullList.ts
		ListItem.ts
	template/
		ListTemplate.ts
```

## Notes

- The app stores data in the browser only. Clearing site data will remove the list.