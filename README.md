# Plann.er

Project developed during the NLW Journey by Rocketseat, following the NodeJs track. The entire back-end of a travel planner was developed from scratch.

## Available APIs:

### Trips
- **Get Trip Details:**
  ```bash
  curl --location 'http://localhost:3333/trips/:tripId'
  ```

- **Create Trip:**
  ```bash
  curl --location 'http://localhost:3333/trips' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "destination": "Destination name",
      "starts_at": "2025-01-01",
      "ends_at": "2025-01-10",
      "owner_name": "John Doe",
      "owner_email": "john.doe@acme.com",
      "emails_to_invite": [
          "john.doe2@acme.com",
          "john.doe3@acme.com",
      ]
  }'
  ```

- **Update Trip:**
  ```bash
    curl --location --request PUT 'http://localhost:3333/trips/:tripId' \
  --header 'Content-Type: application/json' \
  --data '{
      "destination": "Destination name",
      "starts_at": "2025-01-01",
      "ends_at": "2025-01-10"
  }'
  ```
- **Confirm Trip:**
  ```bash
  curl --location 'http://localhost:3333/trips/:tripId/confirm'
  ```
- **Confirm Participant:**
  ```bash
  curl --location 'http://localhost:3333/participants/:participantId/confirm'
  ```

### Participants
- **Get Participant:**
  ```bash
  curl --location 'http://localhost:3333/participants/:participantId'
  ```
- **Get Participants:**
  ```bash
  curl --location 'http://localhost:3333/trips/:tripId/participants'
  ```
- **Create Invite:**
  ```bash
    curl --location 'http://localhost:3333/trips/:tripId/invites' \
  --header 'Content-Type: application/json' \
  --data-raw '{
      "email":"john.doe@acme.com"
  }'
  ```

### Activities
- **Get Activities:**
  ```bash
  curl --location 'http://localhost:3333/trips/:tripId/activities'
  ```
- **Create Activity:**
  ```bash
    curl --location 'http://localhost:3333/trips/:tripId/activities' \
  --header 'Content-Type: application/json' \
  --data '{
      "title": "Activity name",
      "occurs_at": "2025-01-01"
  }'
  ```

### Links
- **Get Link:**
  ```bash
  curl --location 'http://localhost:3333/trips/:tripId/links'
  ```
- **Create Link:**
  ```bash
    curl --location 'http://localhost:3333/trips/:tripId/links' \
  --header 'Content-Type: application/json' \
  --data '{
      "title": "Airbnb reservation",
      "url": "https://airbnb.com/reservation"
  }'
  ```

## Useful commands to run the project locally

### Install project dependencies:
```bash
npm i
```

### Run the project locally:
```bash
npm run dev
```

### Open the dashboard with the database in Prisma:
```bash
npx prisma studio
```
### Create a new migration, which contains an SQL file with all the changes made to the database:
```bash
npx prisma migrate dev
```