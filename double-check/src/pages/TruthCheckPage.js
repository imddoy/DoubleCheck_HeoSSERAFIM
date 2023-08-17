import React, { useState, useEffect } from "react";
import { Div } from "../components/TruthCheck/TruthCheckStyle";
import Detect from "../components/TruthCheck/Detect";
import Result from "../components/TruthCheck/Result";
import { useParams, useLocation } from "react-router-dom";
import axios from "axios";

function TruthCheckPage() {
  const [showDetect, setShowDetect] = useState(true);
  const [hasId, setHasId] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const youtubeUrl = location.state?.youtube_url;

  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonData = JSON.stringify({ youtube_url: youtubeUrl });
        const response = await axios.post(
          "http://127.0.0.1:8000/verify/",
          jsonData,
          {
            headers: {
              "Content-Type": "application/json",
            },
          }
        );
        setResponse(response.data);
      } catch (err) {
        setError(err);
      }
    };

    fetchData();

    const timer = setTimeout(() => {
      setShowDetect(false);
    }, 5000);
    return () => {
      clearTimeout(timer);
    };
  }, []);

  useEffect(() => {
    if (id) {
      setHasId(true);
    }
  }, [id]);

  if (id) {
    return (
      <Div>
        <Result />
      </Div>
    );
  }
  return <Div>{showDetect ? <Detect /> : <Result />}</Div>;
}
export default TruthCheckPage;
