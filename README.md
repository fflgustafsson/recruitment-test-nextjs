## Recruitment Repo / Tasks

This exercise is to see:

- how well you can understand typescript, react and tailwind.
- How well you structure your components
- How well you implement mobile responsiveness

The app is a master -> detail app of one of our demo project.

I would like you to fork this repo on github and when you are done I can simply look at it there.
Once you have completed the tasks we can go through your code together.

### List View

Create the list view so that it contains the same info as the original
https://view.wec360.com/demo/brf-traffen/lagenheter

Fields:

- Floorplan image
- name
- price
- monthlyFee
- livingArea
- rooms
- floor
- status badge

Functionality:

- The unit row should have a hover state
- When clicking the row we should navigate to the detail view
- it should be fully responsive so it looks good all the way from mobile to desktop

**Note** I have created a pages/test.tsx file with some demos and helper functions

### Detail View

Create a detail view that displays the unit.
https://view.wec360.com/demo/brf-traffen/unit/1001

Since we have limited time, we won't be able to implement the full unit page.
The important part for me is to see how well you handle splitting the above page into it's components.
Everything should be in typescript and fully typed.
I also want you to use as much of tailwind as possible, only falling back to css if absolutely necessary.

Components:

- Image header
- Unit name and status
- Fact box with price, monthlyFee, rooms, floor

Functionality:

- important that everything is responsive
- Image Header should take up 60vh but not become over 500px high

### Questions

If you have any questions please contact me at leon@wec360.com and I'll answer them as soon as possible.

## Getting Started

Install Node.js v16 or above

then run

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Learning Resources

- [Next.js](https://nextjs.org/) - The view framework
- [Tailwind](https://tailwindcss.com/) - The main css library we are using
- [Jest](https://jestjs.io/) - Testing library that you can use to test your components if you like
