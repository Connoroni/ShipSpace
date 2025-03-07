Project name: Ship Space
Vercel link: https://starship-hub.vercel.app/
Repo link: https://github.com/Connoroni/ShipSpace

Team members: Jackie, Tom, Connor and Ricards

Project description:
A wiki-style database for all your favourite fictional spaceships.

Problem domain: 
Currently, information about fictional spaceships is scattered across multiple websites and wikis, requiring users to visit different sources for content from various franchises. There is a need for a centralised platform that brings these articles together in one place. The closest existing things to our goal are fan wikis but these tend to be bland and covered in advertising that negatively affects UX.

User stories:
As a user, I want to browse ships from different franchises within a single app.
As a user, I want the site to be visually appealing and easy to navigate.
As a user, I want to create an account that is linked to the articles I publish.
As a user, I want the app to be well-organised, with appropriate tags for each franchise.
As a user, I want to be able to edit articles created by others to ensure they remain accurate and up to date.
As a developer, I want to maintain quality control by requiring users to create an account before they can edit or upload articles.
As a developer, I want article creation to be done through a validated form to ensure consistency and accuracy.

Wireframes
![image](https://github.com/user-attachments/assets/125d7e14-d53d-4dae-a0ee-0a050549a715)
![image](https://github.com/user-attachments/assets/dc284962-74ef-4d95-9aed-23bbdffdeecd)
![image](https://github.com/user-attachments/assets/9a27a55f-5348-4f64-8979-cc8a6bad6d44)

Dependencies:

  "dependencies": {
    "@clerk/nextjs": "^6.12.2",
    "@react-three/drei": "^10.0.4",
    "@react-three/fiber": "^9.0.4",
    "accessibility": "^6.0.7",
    "next": "15.1.6",
    "pg": "^8.13.3",
    "react": "^19.0.0",
    "react-dom": "^19.0.0",
    "react-router-dom": "^6.26.2",
    "three": "^0.174.0"
  },
  "devDependencies": 
    "@eslint/eslintrc": "^3",
    "eslint": "^9",
    "eslint-config-next": "15.1.6",
    "postcss": "^8",
    "tailwindcss": "^3.4.1"

How to Access and Use Ship Space

Accessing the Website

Open your web browser (Chrome, Firefox, Safari, Edge, etc.).
Type or copy this link into the address bar:
 https://starship-hub.vercel.app/

Signing Up

Click on the ‘Sign up’ button in the top right of the header.
Complete the sign-up form.

Signing In

Click on the ‘Sign in’ button in the top right of the header.
Sign in using the details you signed up with.

See the Ships!

Click on ‘Spaceships’ in the header to see a list of all the ships in the database.
Alternatively, click on ‘Tags’ on the home page to see a list of all the different ship tags.
Choose the ship you want to see, then click on it to view its database entry.

Editing a Ship Entry

On the database entry for a ship, click the ‘Edit this article’ button at the bottom of the article.
On the edit page, make your changes using the form.
Save your edits by clicking the ‘Edit your ship’ button at the bottom of the form.

Adding a Ship Entry

Click on the ‘Create article’ button in the header.
Fill in your ship’s details using the form.
Submit your ship entry using the ‘Submit your ship’ button.


Group Reflection
As a team, we are incredibly proud of what we accomplished on this project. It was a challenging yet rewarding experience that allowed all of us to develop new skills and deepen our understanding of full-stack development. One of the biggest takeaways from this project was how well we worked together—we were all genuinely excited about the concept, and our combined efforts resulted in a final product that we are proud of.
One common theme across our reflections is that we all wished we had more time. Whether it was refining the design, implementing more advanced features, or experimenting with different technologies, we constantly found ourselves wanting to push the project further. This, in itself, is a testament to our work ethic and enthusiasm for what we were building.
Individually, we each discovered areas we were particularly passionate about. For instance, one of us found a newfound love for CSS and would have enjoyed more time focusing on styling. Another wanted to explore more 3D model implementations to enhance the user experience. We also faced technical challenges, such as working with metadata and integrating an HTML/Markdown editor for article creation. Additionally, image uploads using Supabase storage buckets were something we only began experimenting with after reaching our MVP, and we would have loved to develop that feature further.
Despite the challenges, this project has given us all greater confidence in our abilities as developers. We now have a deeper understanding of both front-end and back-end development, and for some of us, this was the best work we have done on the course so far. More than anything, this experience has reinforced our belief that we can tackle complex projects, work collaboratively, and create something truly valuable.
Given more time, we know we would have continued refining and improving our project. However, we are extremely happy with what we achieved and grateful for the opportunity to work on something we were all passionate about.
