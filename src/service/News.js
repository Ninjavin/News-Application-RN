import { useState, useEffect } from "react";
import { articles_url, _api_key } from "../config/rest_config";

const newsService = ({ category = "general" }) => {
  const [isLoading, setIsLoading] = useState(true);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);

  async function getArticles() {
    try {
      const url = `${articles_url}?access_key=${_api_key}&languages=en&categories=${category}`;
      const request = new Request(url);

      const articles = await fetch(request);
      const result = await articles.json();

      setResponse(result.data);
    } catch (error) {
      setError(error);
      throw error;
    } finally {
      setIsLoading(false);
    }
  }

  const getArticlesRun = () => {
    getArticles();
  };

  return {
    response,
    error,
    isLoading,
    getArticlesRun,
    setIsLoading,
    setResponse,
  };
};

export default newsService;
