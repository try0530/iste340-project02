import { useEffect, useState } from "react";

import Loading from "../Loading/Loading";
import getData from "../../utils/getData";
import { CardGroup, Card } from "semantic-ui-react";
import Dialog from "@mui/material/Dialog";
import DialogContent from "@mui/material/DialogContent";
import { Button } from "@mui/material";

import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";

import "./news.css";

const News = () => {
  const [loaded, setLoaded] = useState(false);
  const [newsData, setNewsData] = useState("");
  const [newsClick, setNewsClick] = useState("");
  const [openNews, setOpenNews] = useState(false);

  // handle when the news card clicked by user
  function handleNewsCardClick(news) {
    setNewsClick(news);
    setOpenNews(true);
  }
  // handle to close the opened card
  function handleNewsClose() {
    setNewsClick("");
    setOpenNews(false);
  }

  useEffect(() => {
    // get data
    getData("news/").then((json) => {
      setLoaded(true);
      setNewsData(json);
      setTotalNewsPage(Math.ceil(json.older[1].length / newsPerPage));
      updateCurrentPageData(json, currentNewsPage);
    });
  }, []);

  // News pages settings start
  // data for change page
  const [currentNewsPage, setCurrentNewsPage] = useState(1);
  const [currentNews, setCurrentNews] = useState([]);
  const [totalNewsPage, setTotalNewsPage] = useState(1);

  // animate for page change
  const [animateStatus, setAnimateStatus] = useState("current");

  const newsPerPage = window.innerWidth > 1200 ? 10 : 6;

  // when page button clicked, change data
  useEffect(() => {
    if (newsData) {
      updateCurrentPageData(newsData, currentNewsPage);
    }
  }, [currentNewsPage, newsData]);

  // handle when the page change button clicked
  function handlePageChangeClicked(direction) {
    if (animateStatus === "fade-out") return;
    setAnimateStatus("fade-out");

    if (currentNewsPage !== totalNewsPage && direction === "right") {
      // change the new page news data and add the fade-in animation
      setTimeout(() => {
        setCurrentNewsPage(currentNewsPage + 1);
        setAnimateStatus("fade-in");
      }, 300);

      // change the status to current
      setTimeout(() => {
        setAnimateStatus("current");
      }, 600);
    } else if (currentNewsPage !== 1 && direction === "left") {
      // change the new page news data and add the fade-in animation
      setTimeout(() => {
        setCurrentNewsPage(currentNewsPage - 1);
        setAnimateStatus("fade-in");
      }, 300);

      // change the status to current
      setTimeout(() => {
        setAnimateStatus("current");
      }, 600);
    } else {
      setAnimateStatus("current");
    }
  }

  function updateCurrentPageData(newsData, currentNewsPage) {
    const indexOfLastNews = currentNewsPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;

    setCurrentNews(newsData.older.slice(indexOfFirstNews, indexOfLastNews));
  }

  // News pages settings end

  if (!loaded) {
    return (
      <div className="news-div section-div">
        <Loading type="News" />
      </div>
    );
  }

  return (
    <div className="news-div section-div">
      <h2>News</h2>
      <div className="news-lists">
        <CardGroup className={`news-group ${animateStatus}`}>
          {currentNews.map((news, i) => (
            <>
              <Card
                header={news.title}
                meta={news.date}
                key={i}
                onClick={() => handleNewsCardClick(i)}
                className="news-card"
              />
              {newsClick === i && (
                <Dialog
                  open={openNews}
                  onClose={handleNewsClose}
                  sx={{
                    "@media only screen and (max-width: 768px)": {
                      maxHeight: "80vh",
                      marginTop: "7em",
                    },
                  }}
                >
                  <DialogContent>
                    <h4>{news.title}</h4>
                    <span>{news.date}</span>
                    <p>{news.description}</p>
                  </DialogContent>
                </Dialog>
              )}
            </>
          ))}
        </CardGroup>
        <div className="news-page-btns">
          <Button onClick={() => handlePageChangeClicked("left")}>
            <ArrowBackIosNewIcon />
          </Button>
          <Button onClick={() => handlePageChangeClicked("right")}>
            <ArrowForwardIosIcon />
          </Button>
        </div>
      </div>
    </div>
  );
};

export default News;
