# OdysseyCMS

OdysseyCMS is a full-stack application that includes a Content Management System (CMS) serving the purpose of allowing users to create, update, and delete their travel experiences. The application also allows users to view the travel experiences of other users and leave comments.

## Purpose

The purpose of this application is to allow users to share their travel experiences with others, as well as view the experiences of others. The CMS allows users to create, update, and delete their travel experiences, and leave comments on other users' experiences.

## How it works

The application uses JSONblob.com as a database to store and retrieve information. The necessary JavaScript code has been implemented for retrieving information (i.e., index/detail), adding a new entity (i.e., create), modifying an entity (i.e., edit), and deleting an entity (i.e., delete).

For each entity and for each action of the CMS, the interface (i.e., index/detail/create/edit/delete web pages) has been implemented using an HTML template. jQuery has been used for DOM manipulation and events.

## Tech
...

## Installation

OdysseyCMS requires ... v1.0.0+ to run.

```sh
link: https://....com
```

## Entities

The following entities have been implemented:

1. User - This entity stores information about the user, such as their name, email address, and password.
2. Experience - This entity stores information about the travel experience, such as the destination, date, and description.
3. Comment - This entity stores information about the comments left by users on other users' experiences, such as the text of the comment and the user who left it.

For each entity, the following actions have been implemented:

1. Index - This page displays a list of all entities of that type.
2. Detail - This page displays the details of a specific entity of that type.
3. Create - This page allows the user to create a new entity of that type.
4. Edit - This page allows the user to edit an existing entity of that type.
5. Delete - This page allows the user to delete an existing entity of that type.

## Contributions

This project was completed by the following team:

1. Lulseged Admasu - Back-end development, database integration, and documentation.
2. Teddy Amare - Front-end development and HTML/CSS integration.
3. Tedla Tafari jQuery integration and testing.
