- Bugs are simply things that are broken.
- Chores are the things you have to do that don’t actually change your product.

- Backlog
This is the panel where upcoming stories are prioritized. Tracker lists a project’s Backlog (and Current) stories in priority order.

- Icebox
The Icebox panel contains stories that have not yet been prioritized.

- Iteration
An iteration (called a sprint by Scrum practitioners) is a timebox of consistent length that a team uses for the cadence of their project. 

- My Work
The My Work panel shows all the stories of which you are an owner.

- Panel
Stories are presented in panels in the Project and Workspace views. 


Git Naming conventions: https://github.com/andela/bestpractices/wiki/Git-naming-conventions-and-best-practices

UI
- https://code.tutsplus.com/tutorials/ui-design-for-developers-introduction--active-9921

- https://www.elegantthemes.com/blog/resources/10-rules-of-good-ui-design-to-follow-on-every-web-design-project

- COLORS: https://color.adobe.com/explore/?filter=most-popular&time=month


USERS
-----
POST /auth/signup ✅
Create user account

POST /auth/signin 
Login a user

PATCH /user/:userId
Change a user to a mentor


MENTORS
-------
GET /mentors ✅
Get all mentors

GET /mentors/:mentorId ✅
Get specific mentor


SESSIONS
--------
POST /sessions
Create a mentorship session request

PATCH /sessions/:sessionId/accept
A mentor can accept a mentorship session request.

PATCH /sessions/:sessionId/reject
A mentor can reject a mentorship session request.



OPTIONAL
--------
GET /sessions
Get all mentorship session requests.

POST /sessions/:sessionId/review
Review a mentor after a mentorship session.

DELETE /sessions/:sessionId/review
Admin can delete mentorship session review deemed inappropriate.

