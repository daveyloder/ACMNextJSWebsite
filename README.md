# ACM Temple University - Docker Deployment

This document provides instructions on how to run the ACM Temple University web application using Docker on a Linux virtual server. This setup utilizes Docker Compose to orchestrate two services: a frontend (Next.js) and a backend (Strapi CMS).

## Prerequisites

Before you begin, ensure that the following are installed on your Linux virtual server:

- **Docker Engine:** Make sure Docker is installed and running on your server. You can find installation instructions for various Linux distributions on the official Docker website: [https://docs.docker.com/engine/install/](https://docs.docker.com/engine/install/)
- **Docker Compose:** Docker Compose is used to define and manage multi-container Docker applications. Install it following the instructions here: [https://docs.docker.com/compose/install/](https://docs.docker.com/compose/install/)

## Project Structure

The project directory should have the following structure:

```
acm-project/
├── frontend/
│   ├── Dockerfile
│   └── ... (Next.js frontend files)
├── backend/
│   ├── Dockerfile
│   ├── src/
│   │   └── database/
│   │       └── data.db (Your SQLite database file)
│   ├── .tmp/
│   └── ... (Strapi backend files)
└── docker-compose.yml
```

**Important Notes:**

- Ensure that the `frontend` and `backend` directories contain their respective `Dockerfile`s, which define how to build the Docker images for each service.
- The `backend/src/database/data.db` file is mounted as a volume, meaning changes within the container will be reflected on the host and vice versa. This is important for persistent data.
- The `.tmp` directory in the backend is also mounted as a volume.

## Deployment Steps

Follow these steps to deploy the ACM web application using Docker Compose:

1.  **Navigate to the Project Directory:**
    Open a terminal on your virtual server and navigate to the root directory of your project (where the `docker-compose.yml` file is located).

    ```bash
    cd /path/to/your/acm-project
    ```

2.  **Start the Docker Containers:**
    Use the `docker-compose up` command to build the Docker images (if they haven't been built before) and start the containers defined in the `docker-compose.yml` file. The `-d` flag will run the containers in detached mode (in the background).

    ```bash
    docker-compose up -d
    ```

    Docker Compose will first build the images for the `frontend` and `backend` services based on their respective `Dockerfile`s. Once the images are built, it will create and start the containers.

3.  **Monitor the Container Startup (Optional):**
    You can check the status of the containers and view their logs using the following commands:

    - **List running containers:**

      ```bash
      docker ps
      ```

      You should see two containers running, one for `frontend` and one for `backend`.

    - **View logs for a specific service (e.g., backend):**
      ```bash
      docker logs backend -f
      ```
      Replace `backend` with `frontend` to see the frontend logs. The `-f` flag will follow the logs in real-time. Press `Ctrl+C` to stop viewing the logs.

4.  **Access the Application:**
    Once the containers are running, you can access the application through the following URLs in your web browser:

    - **Frontend:** `http://your_server_ip:3000`
    - **Backend (Strapi Admin):** `http://your_server_ip:1338/admin` (You might need to create an admin user upon the first visit to this URL).

    Replace `your_server_ip` with the actual IP address or domain name of your virtual server.

## Important Considerations

- **Firewall Configuration:** Ensure that your virtual server's firewall is configured to allow incoming traffic on ports `3000` and `1338`.
- **Environment Variables:** The `docker-compose.yml` file defines several environment variables for both the frontend and backend services. These are crucial for the application to function correctly.
  - `NEXT_PUBLIC_STRAPI_API_URL` in the frontend is set to `http://backend:1338`. Docker's internal DNS resolution allows the frontend container to communicate with the backend container using the service name (`backend`).
  - The backend environment variables configure the Strapi CMS, including the database connection (SQLite), API keys, and security settings. **Do not modify the `APP_KEYS`, `API_TOKEN_SALT`, `ADMIN_JWT_SECRET`, and `TRANSFER_TOKEN_SALT` in a production environment unless you understand the implications.** These are security-sensitive values.
- **Data Persistence:** The SQLite database located in `./backend/src/database` on the host is mounted into the backend container. This ensures that your data persists even if the container is stopped or restarted.
- **Building Images:** The `build` section in the `docker-compose.yml` specifies the context and Dockerfile for building the images. If you make changes to the frontend or backend code, you will need to rebuild the images using:
  ```bash
  docker-compose build
  ```
  and then restart the containers:
  ```bash
  docker-compose up -d
  ```
- **Stopping the Application:** To stop the running containers, use the following command in the project directory:
  ```bash
  docker-compose down
  ```
  This will stop and remove the containers and the networks created by Docker Compose.

## Further Information

For more detailed information on Docker and Docker Compose, please refer to the official documentation:

- **Docker Documentation:** [https://docs.docker.com/](https://docs.docker.com/)
- **Docker Compose Documentation:** [https://docs.docker.com/compose/](https://docs.docker.com/compose/)
