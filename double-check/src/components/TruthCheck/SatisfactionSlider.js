import React, { useState, useRef, useEffect } from "react";
import styled from "styled-components";
import Draggable from "react-draggable";
import down from "../../img/icon_down_.svg";
import up from "../../img/icon_up_.svg";
import sendBtn from "../../img/Vector.png";
import axios from "axios";

const Div = styled.div`
  width: 100%;
`;
const SliderContainer = styled.div`
  width: 100%;
  height: 9.544px;
  border-radius: 2.5px;
  background: #e7e8f3;
  position: relative;
  margin: 27.9px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 30px;
`;

const DraggableHandle = styled.div`
  width: 15px;
  height: 15px;
  background-color: #3a42bf;
  border-radius: 50%;
  position: absolute;
  left: 50%;
  transform: translateX(-50%);
  cursor: grab;
`;

const FeedbackContainer = styled.div`
  width: 100%;
  height: ${({ submitted }) => (submitted ? "58px" : "auto")};
  background-color: ${({ submitted }) =>
    submitted ? "transparent" : "#e7e8f3"};
  border: ${({ submitted }) => (submitted ? "1px solid #3A42BF" : "none")};
  border-radius: 15px;
  padding: 10px;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  color: ${({ submitted }) => (submitted ? "#3A42BF" : "inherit")};
  font-size: ${({ submitted }) => (submitted ? "14px" : "inherit")};
  font-style: normal;
  line-height: normal;
  justify-content: ${({ submitted }) => (submitted ? "center" : "flex-start")};
  margin-bottom: 50px;
`;

const FeedbackInput = styled.textarea`
  width: 100%;
  padding: 10px;
  border-radius: 10px;
  background-color: transparent;
  border: none;
  resize: none;
  outline: none;
`;

const SubmitButton = styled.img`
  width: 9px;
  height: 18px;
  align-self: flex-end;
  margin-right: 22px;
  margin-bottom: 22px;
  margin-top: 10px;
`;

const STitle = styled.div`
  color: #3a42bf;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: normal;
  margin-top: 58px;
`;

const FBtn_down = styled.img`
  width: 21.02px;
  height: 21px;
  margin-top: 8px;
`;

const FBtn_up = styled.img`
  width: 21.02px;
  height: 21px;
  margin-bottom: 8px;
`;

const SatisfactionSlider = () => {
  const [feedbackVisible, setFeedbackVisible] = useState(false);
  const [feedbackSubmitted, setFeedbackSubmitted] = useState(false);
  const [feedbackText, setFeedbackText] = useState("");
  const sliderRef = useRef(null);
  const [sliderWidth, setSliderWidth] = useState(0);
  const [isDragDisabled, setIsDragDisabled] = useState(false);

  useEffect(() => {
    if (sliderRef.current) {
      setSliderWidth(sliderRef.current.offsetWidth);
    }
    console.log(sliderWidth);
  }, []);

  const handleDrag = (e, data) => {
    if (data.x < 0) {
      setFeedbackVisible(true);
      console.log("불만족");
      console.log(data.x);
    } else {
      setFeedbackVisible(false);
      setFeedbackSubmitted(true);
      console.log("만족");
      console.log(data.x);
    }

    // 슬라이더 움직임 비활성화
    setIsDragDisabled(true);
  };

  const handleFeedbackSubmit = async () => {
    // 피드백 텍스트가 비어있는지 확인
    if (!feedbackText.trim()) {
      alert("피드백을 작성해주세요");
      return;
    }

    console.log(feedbackText);

    try {
      const response = await axios.post("http://127.0.0.1:8000/feedback/", {
        feedback: feedbackText,
      });

      console.log(response.data);

      setFeedbackSubmitted(true);
    } catch (error) {
      console.error("Error sending feedback:", error);
    }
  };

  return (
    <Div>
      <STitle>판단 결과가 만족스러우신가요?</STitle>
      <SliderContainer ref={sliderRef}>
        <FBtn_down src={down} />
        <Draggable
          axis="x"
          bounds="parent"
          onStop={handleDrag}
          disabled={isDragDisabled}
        >
          <DraggableHandle />
        </Draggable>
        <FBtn_up src={up} />
      </SliderContainer>
      <FeedbackContainer
        show={feedbackVisible || feedbackSubmitted}
        submitted={feedbackSubmitted}
      >
        {!feedbackSubmitted ? (
          <>
            <FeedbackInput
              rows="3"
              value={feedbackText}
              onChange={(e) => setFeedbackText(e.target.value)}
              placeholder="불만족스러웠던 점이 있다면 이곳에 작성해 주세요. 더욱 정확한 분석 결과를 제공하는 데 도움이 됩니다. 감사합니다."
            />
            <SubmitButton src={sendBtn} onClick={handleFeedbackSubmit} />
          </>
        ) : (
          "피드백이 전송되었습니다. 감사합니다."
        )}
      </FeedbackContainer>
    </Div>
  );
};

export default SatisfactionSlider;
