# AniRec - AI Anime Recommendation App

## Overview

AniRec is a mobile application designed to provide personalized anime recommendations based on user preferences. Utilizing a generative AI model with access to the MyAnimeList database, AniRec offers a curated list of anime suggestions, complete with key details such as titles, ratings, summaries, and information on where to legally stream or watch each recommendation.

## Core Features

-   **AI Anime Recommendation:** Leverages a generative AI model to suggest anime based on user-specified preferences. The AI utilizes the MyAnimeList database to generate relevant and personalized recommendations.
-   **Recommendation Display:** Displays anime recommendations in an easy-to-navigate card format, including title, rating, a brief summary, and where to watch.
-   **Watch Location Info:** Provides direct links or information on legal streaming or viewing options for each recommended anime.
-   **Preference Input:** Allows users to input their favorite anime and genres to refine the recommendation engine for more accurate future suggestions.

## Technologies Used

-   Next.js
-   React
-   TypeScript
-   Tailwind CSS
-   ShadCN UI components
-   Genkit
-   Lucide React Icons

## Installation and Setup

Follow these steps to set up the AniRec application:

1.  **Clone the Repository:**
    ```bash
    git clone <repository-url>
    cd <anirec-directory>
    ```

2.  **Install Dependencies:**
    ```bash
    npm install
    ```

3.  **Set Up Environment Variables:**
    -   Create a `.env` file in the root directory of the project.
    -   Add your Google Gemini API key to the `.env` file:
        ```
        GOOGLE_GENAI_API_KEY=YOUR_API_KEY
        ```
    -   Obtain your Google Gemini API key from [Google AI Studio](https://makersuite.google.com/).
    -   Also, add the Google Search API key and Engine ID to the `.env` file:
        ```
        GOOGLE_SEARCH_API_KEY=YOUR_SEARCH_API_KEY
        GOOGLE_SEARCH_ENGINE_ID=YOUR_SEARCH_ENGINE_ID
        ```

4.  **Run the Development Server:**
    ```bash
    npm run dev
    ```

    This command starts the Next.js development server and opens the app in your default web browser at `http://localhost:9002`.

## Usage Guidelines

1.  **Enter Preferences:** Use the input field on the homepage to enter your anime preferences, such as favorite genres or specific anime titles.
2.  **Get Recommendations:** Click the "Get Recommendations" button to generate a list of personalized anime suggestions.
3.  **Explore Recommendations:** Browse the displayed anime recommendations, each shown in a card with its title, rating, summary, and a link to watch.
4.  **Refine Recommendations:** Continue to refine your preferences for more accurate and tailored suggestions.

## Project Structure

The project directory is structured as follows:

-   `.env`: Stores environment-specific configuration, such as API keys.
-   `.vscode/`: Contains VS Code-specific settings, such as configurations for the IDE.
-   `README.md`: Provides an overview of the project, installation instructions, and usage guidelines.
-   `components.json`: Configuration file for ShadCN UI components.
-   `next.config.js`: Configuration file for Next.js.
-   `package.json`: Contains project metadata, dependencies, and scripts.
-   `src/`: Contains the main application source code.
    -   `ai/`: Includes AI-related code using Genkit.
        -   `ai-instance.ts`: Initializes the Genkit AI instance.
        -   `dev.ts`: Development-related AI configurations.
        -   `flows/`: Defines Genkit flows for generating anime recommendations.
            -   `generate-anime-recommendations.ts`: Implements the anime recommendation flow.
            -   `summarize-anime-synopsis.ts`: Includes functionalities for summarizing anime synopses using AI.
    -   `app/`: Defines the application's routing and page structure using Next.js App Router.
        -   `globals.css`: Global CSS file containing Tailwind CSS configurations and custom styles.
        -   `layout.tsx`: Defines the root layout of the application.
        -   `page.tsx`: Implements the main page of the application.
    -   `components/`: Contains reusable React components.
        -   `icons.ts`: Defines custom icons used throughout the application.
        -   `ui/`: Includes UI components built with ShadCN UI.
    -   `lib/`: Contains utility functions and helper libraries.
        -   `utils.ts`: Provides utility functions for the application.
    -   `services/`: Includes external services used by the application.
        -   `myanimelist.ts`: Simulates fetching anime details from MyAnimeList.
    -   `hooks/`: Includes reusable React hooks.
        -   `use-mobile.tsx`: Detects if the app is running on a mobile device.
        -   `use-toast.ts`: Implements custom toast notifications.
    -   `tailwind.config.ts`: Configuration file for Tailwind CSS.
    -   `tsconfig.json`: Configuration file for TypeScript.

## Contributing
   Feel free to contribute to the project by opening issues, suggesting improvements or submitting pull requests.

## License

MIT License.
