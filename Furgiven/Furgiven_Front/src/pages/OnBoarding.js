import Nav from "../components/Nav";
import { useState } from "react";
import { useEffect } from "react";
import { useCookies } from "react-cookie";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const OnBoarding = () => {
  const [cookies, setCookie, removeCookie] = useCookies(null);
  const [formData, setFormData] = useState({
    user_id: cookies.UserId,
    nickname: "",
    dob_day: "",
    dob_month: "",
    dob_year: "",
    show_gender: false,
    gender: "man",
    gender_interest: "",
    url: "",
    about: "",
    species: "",
    species_interest: "",
    matches: [],
  });

  let navigate = useNavigate();

  const handleSubmit = async (e) => {
    console.log("submitted");
    e.preventDefault();
    try {
      const response = await axios.put("http://localhost:8000/user", {
        formData,
      });
      console.log(response);
      const success = response.status === 200;
      if (success) navigate("/dashboard");
    } catch (err) {
      console.log(err);
    }
  };
  //Get all the species on the DB
  function getSpecies() {
    const species = "";
    /*useEffect(() => {
            fetch('/species').then(response =>{
                if(response.ok){
                    return esponse.json();
                }
                throw response;
            }).then(res => {
                setFormData()
            }).catch(error =>{
                console.error("Nope")
            })
            );
          });*/
  }
  const handleChange = (e) => {
    console.log("e", e);
    const value =
      e.target.type === "checkbox" ? e.target.checked : e.target.value;
    const name = e.target.name;

    setFormData((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  return (
    <>
      <Nav minimal={true} setShowModal={() => {}} showModal={false} />

      <div className="onboarding">
        <h2>CREATE ACCOUNT</h2>

        <form onSubmit={handleSubmit}>
          <section>
            <label htmlFor="nickname">Nickname</label>
            <input
              id="nickname"
              type="text"
              name="nickname"
              placeholder="Nickname"
              required={true}
              value={formData.nickname}
              onChange={handleChange}
            />

            <label>Birthday</label>
            <div className="multiple-input-container">
              <input
                id="dob_day"
                type="number"
                name="dob_day"
                placeholder="DD"
                required={true}
                value={formData.dob_day}
                onChange={handleChange}
              />

              <input
                id="dob_month"
                type="number"
                name="dob_month"
                placeholder="MM"
                required={true}
                value={formData.dob_month}
                onChange={handleChange}
              />

              <input
                id="dob_year"
                type="number"
                name="dob_year"
                placeholder="YYYY"
                required={true}
                value={formData.dob_year}
                onChange={handleChange}
              />
            </div>

            <label>Gender</label>
            <div className="multiple-input-container">
              <input
                id="man-gender-identity"
                type="radio"
                name="gender"
                value="man"
                onChange={handleChange}
                checked={formData.gender === "man"}
              />
              <label htmlFor="man-gender-identity">Man</label>
              <input
                id="woman-gender-identity"
                type="radio"
                name="gender"
                value="woman"
                onChange={handleChange}
                checked={formData.gender === "woman"}
              />
              <label htmlFor="woman-gender-identity">Woman</label>
              <input
                id="more-gender-identity"
                type="radio"
                name="gender"
                value="more"
                onChange={handleChange}
                checked={formData.gender === "more"}
              />
              <label htmlFor="more-gender-identity">More</label>
            </div>
            <label>Gender interest </label>

            <div className="multiple-input-container">
              <input
                id="man-gender-interest"
                type="radio"
                name="gender_interest"
                value="man"
                onChange={handleChange}
                checked={formData.gender_interest === "man"}
              />
              <label htmlFor="man-gender-interest">Man</label>
              <input
                id="woman-gender-interest"
                type="radio"
                name="gender_interest"
                value="woman"
                onChange={handleChange}
                checked={formData.gender_interest === "woman"}
              />
              <label htmlFor="woman-gender-interest">Woman</label>
              <input
                id="everyone-gender-interest"
                type="radio"
                name="gender_interest"
                value="everyone"
                onChange={handleChange}
                checked={formData.gender_interest === "everyone"}
              />
              <label htmlFor="everyone-gender-interest">Everyone</label>
            </div>

            <label>Species</label>

            <div className="multiple-input-container">
              <input
                id="dog-species-identity"
                type="radio"
                name="species"
                value="mammal"
                onChange={handleChange}
                checked={formData.species === "mammal"}
              />
              <label htmlFor="dog-species-identity">Mammal</label>
              <input
                id="bird-species-identity"
                type="radio"
                name="species"
                value="bird"
                onChange={handleChange}
                checked={formData.species === "bird"}
              />
              <label htmlFor="bird-species-identity">Bird</label>
              <input
                id="reptile-species-identity"
                type="radio"
                name="species"
                value="reptile"
                onChange={handleChange}
                checked={formData.species === "reptile"}
              />
              <label htmlFor="reptile-species-identity">Reptile</label>
            </div>

            <label>Species interest</label>

            <div className="multiple-input-container">
              <input
                id="dog-species-interest"
                type="radio"
                name="species_interest"
                value="mammal"
                onChange={handleChange}
                checked={formData.species_interest === "mammal"}
              />
              <label htmlFor="dog-species-interest">Mammal</label>
              <input
                id="bird-species-interest"
                type="radio"
                name="species_interest"
                value="bird"
                onChange={handleChange}
                checked={formData.species_interest === "bird"}
              />
              <label htmlFor="bird-species-interest">Bird</label>
              <input
                id="reptile-species-interest"
                type="radio"
                name="species_interest"
                value="reptile"
                onChange={handleChange}
                checked={formData.species_interest === "reptile"}
              />
              <label htmlFor="reptile-species-interest">Reptile</label>
              <input
                id="all-species-interest"
                type="radio"
                name="species_interest"
                value="all"
                onChange={handleChange}
                checked={formData.species_interest === "all"}
              />
              <label htmlFor="all-species-interest">All</label>
            </div>

            <label htmlFor="about">About me</label>
            <input
              id="about"
              type="text"
              name="about"
              required={true}
              placeholder="I like long walks..."
              value={formData.about}
              onChange={handleChange}
            />

            <input type="submit"/>
          </section>

          <section>
            <label htmlFor="url">Profile Photo</label>
            <input
              type="url"
              name="url"
              id="url"
              onChange={handleChange}
              required={true}
            />
            <div className="photo-container">
              {formData.url && (
                <img src={formData.url} alt="profile pic preview" />
              )}
            </div>
          </section>
        </form>
      </div>
    </>
  );
};
export default OnBoarding;
