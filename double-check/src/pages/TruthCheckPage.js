import React, { useState, useEffect } from "react";
import { Div } from "../components/TruthCheck/TruthCheckStyle";
import Detect from "../components/TruthCheck/Detect";
import Result from "../components/TruthCheck/Result";
import { useParams, useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

function TruthCheckPage() {
  const [showDetect, setShowDetect] = useState(true);
  const [hasId, setHasId] = useState(false);
  const [response, setResponse] = useState(null);
  const [error, setError] = useState(null);
  const { id } = useParams();
  const location = useLocation();
  const youtubeUrl = location.state?.youtube_url;
  const navigate = useNavigate();

  useEffect(() => {
    if (!id) {
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
        } catch (error) {
          console.log("작성 실패");
          console.log(error.message);
          console.log(error);
          if (error.response && error.response.data) {
            console.log(error.response.data);
            alert("영상 길이가 너무 깁니다");
            navigate("/main");
            return; // 이 부분 추가
          }
          setError(error);
        }
      };

      fetchData();

      const timer = setTimeout(() => {
        setShowDetect(false);
      }, 5000);
      return () => {
        clearTimeout(timer);
      };
    }
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
