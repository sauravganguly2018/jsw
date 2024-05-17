import React from "react";
import "./OurStory.css";
import ruler from "../../assets/img/landing/Group-237655.png";
import lower1 from "../../assets/img/landing/lower1.jpeg";
import lower2 from "../../assets/img/landing/lower2.png";
import lower3 from "../../assets/img/landing/lower3.jpeg";
// import upper from '../../assets/img/landing/upper.jpeg'

const OurStory = () => {
  return (
    <div className="successStory">
      <div className="outer1">
        <div className="upperContent">
          <div className="img"></div>
          <div className="content">
            <div className="heading">
              <h2>Our Success Story</h2>
              <img src={ruler}></img>
            </div>
            <p>
              India is at the cusp of a transformational journey to become the
              world’s third-largest economy by 2030. However, this growth must
              be inclusive and equitable, benefitting all members of the
              community. This growth momentum is fuelled by our demographic
              dividend – 65% of our population is under the age of 35 – that is
              slated to grow over the next two decades as our share of the
              working-age population reaches 59% of our total population.
            </p>
            <p>
              It is important that all our constituents, across geographies and
              gender, participate and contribute to this economic advancement.
              However, as per a study, 233 million rural women of the
              working-age population are out of the workforce. This corroborates
              a broader fact that women’s contribution to the country’s GDP is
              low at 18% compared to other countries such as Japan (at 33%) and
              China (at 41%).
            </p>
          </div>
        </div>
        <div className="lowerContent">
          <div className="inner" id="inner1">
            <div
              className="img"
              style={{
                backgroundImage: `url(${lower1})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3>Market Linkages</h3>
            <p>
              lorem ipsum dolor sit amet consectetur. Odio risus turpis diam
              risus commodo. Urna magnis enim sed dolor ullamcorper est. Nibh
              nisl pulvinar tortor egestas id. Lorem ipsum dolor sit amet
              consectetur. Odio risus turpis diam risus commodo. Urna magnis
              enim sed dolor ullamcorper est. Nibh nisl pulvinar tortor egestas
              id.{" "}
            </p>
          </div>
          <div className="inner" id="inner1">
            <div
              className="img"
              style={{
                backgroundImage: `url(${lower2})`,
                backgroundSize: "cover",
              }}
            ></div>
            <h3>Financial Assistance</h3>
            <p>
              lorem ipsum dolor sit amet consectetur. Odio risus turpis diam
              risus commodo. Urna magnis enim sed dolor ullamcorper est. Nibh
              nisl pulvinar tortor egestas id. Lorem ipsum dolor sit amet
              consectetur. Odio risus turpis diam risus commodo. Urna magnis
              enim sed dolor ullamcorper est. Nibh nisl pulvinar tortor egestas
              id.{" "}
            </p>
          </div>
          <div className="inner" id="inner1">
            <div
              className="img"
              style={{
                backgroundImage: `url(${lower3})`,
                backgroundSize:"cover",
              }}
            ></div>
            <h3>Mentor Connects</h3>
            <p>
              lorem ipsum dolor sit amet consectetur. Odio risus turpis diam
              risus commodo. Urna magnis enim sed dolor ullamcorper est. Nibh
              nisl pulvinar tortor egestas id. Lorem ipsum dolor sit amet
              consectetur. Odio risus turpis diam risus commodo. Urna magnis
              enim sed dolor ullamcorper est. Nibh nisl pulvinar tortor egestas
              id.{" "}
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OurStory;
