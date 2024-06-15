/* eslint-disable @typescript-eslint/naming-convention */
import type { NextPage } from "next";
import { useRouter } from "next/router";
import type { InputHTMLAttributes } from "react";
import { useState } from "react";
import { siteMetadata } from "src/data/siteMetaData";

export const FormMemberRegistration: NextPage = () => {
  const router = useRouter();
  const [isCheckboxState, setIsCheckboxState] = useState(false);
  const [isCheckboxResearcherState, setIsCheckboxResearcherState] = useState(0);
  const [researcher, setResearcher] = useState("研究者");
  const [otherOccupation, setOtherOccupation] = useState("");
  const enableOtherOccupation = isCheckboxResearcherState !== 2;

  const handleOnChange = () => {
    setIsCheckboxState((prevCheck) => {
      return !prevCheck;
    });
  };
  const handleOnChangeResearcher0 = () => {
    setIsCheckboxResearcherState(0);
    setResearcher("研究者");
  };
  const handleOnChangeResearcher1 = () => {
    setIsCheckboxResearcherState(1);
    setResearcher("代理店/販売店");
  };
  const handleOnChangeResearcher2 = () => {
    setIsCheckboxResearcherState(2);
    setResearcher(otherOccupation);
  };
  const handleOnChangeResearcherText: InputHTMLAttributes<HTMLInputElement>["onChange"] = (event) => {
    setOtherOccupation(event.currentTarget.value);
  };

  const handleRegisterUser = async (event: any) => {
    event.preventDefault();
    // const useremail = user?.email || "";

    const newsletter = isCheckboxState === true ? "不要" : "要";
    const res = await fetch("/api/send", {
      body: JSON.stringify({
        subject: "登録を承りました。",
        to: siteMetadata.email,
        text:
          "以下の内容でご登録を承りました。後ほど、ご登録完了のお知らせをメールでお送りいたします。\n完了まで１⽇程度お時間がかかる場合がございますのでご了承ください。\n\n" +
          event.target.surname.value +
          " " +
          event.target.givenname.value +
          " 様" +
          "\n\nご所属先" +
          "\n会社/機関/⼤学： " +
          event.target.labo.value +
          "\n部署/研究：" +
          event.target.department.value +
          "\n\nご職業: " +
          researcher +
          "\n その他: " +
          event.target.other_occupation.value +
          "\n\nご住所" +
          "\n〒 " +
          event.target.zipcode.value +
          "\n" +
          event.target.address1.value +
          event.target.address2.value +
          event.target.address3.value +
          "\n\n📞 " +
          event.target.phone1.value +
          " 内線: " +
          event.target.phone2.value +
          "\n\n✉️ " +
          event.target.email.value +
          "\n\nご専⾨分野: " +
          event.target.speciality.value +
          "\n\n資料ご請求製品名: " +
          event.target.reference.value +
          "\n\nお問い合わせ内容:\n" +
          event.target.message.value +
          "\n\n\nニュースレター配信: " +
          newsletter,
        email: event.target.email.value,
      }),
      headers: {
        "Content-Type": "application/json",
      },
      method: "POST",
    });

    const result = await res.json();
    router.push({
      pathname: "/success",
      query: result,
    });
  };

  return (
    <div className="container mt-10 font-semibold sm:mt-0 sm:p-6 lg:px-20">
      <div className="mt-5 whitespace-nowrap md:mt-0">
        <form onSubmit={handleRegisterUser}>
          <div className="mb-3 flex flex-col justify-between sm:flex-row sm:items-center">
            <div className="mb-3 mr-3">お名前*</div>
            <label htmlFor="surname" className="mr-3 whitespace-nowrap">
              姓
            </label>
            <input
              id="surname"
              name="surname"
              type="text"
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
              placeholder="Surname"
              autoComplete="family-name"
              required
              minLength={1}
            />
            <label htmlFor="givenname" className="mx-3 whitespace-nowrap">
              名
            </label>
            <input
              id="givenname"
              name="givenname"
              type="text"
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
              placeholder="Given name"
              required
              autoComplete="given-name"
            />
          </div>
          <div className="mb-3 flex flex-col sm:flex-row">
            <div className="my-3 mr-3">ご所属先*</div>
            <div className="flex flex-col justify-start">
              <div className="flex leading-tight">
                <label htmlFor="labo" className="mr-3 inline-flex items-center whitespace-nowrap">
                  会社/機関/⼤学*
                </label>
                <input
                  id="labo"
                  name="labo"
                  type="text"
                  className="mt-1 block w-full overflow-x-scroll border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm md:w-96"
                  placeholder="Company/Organization/University"
                  required
                  minLength={3}
                />
              </div>
              <div className="flex leading-tight">
                <label htmlFor="department" className="mr-3 whitespace-nowrap">
                  部署/研究室*
                </label>
                <input
                  id="department"
                  name="department"
                  type="text"
                  className="mt-1 block w-full overflow-x-scroll border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm md:w-96"
                  placeholder="Department/Laboratory"
                  required
                  minLength={3}
                />
              </div>
            </div>
          </div>
          <div className="my-6 flex flex-wrap">
            <span className="mr-5 whitespace-nowrap">ご職業*</span>
            <div className="mt-0 flex flex-col">
              <label className="inline-flex items-center">
                <input
                  required
                  type="radio"
                  id="researcher"
                  className="text-primary focus:border-primary focus:ring-[#412c41] "
                  name="researcher"
                  value="研究者"
                  onChange={handleOnChangeResearcher0}
                  checked={isCheckboxResearcherState === 0}
                />
                <span className="ml-2">研究者</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  required
                  type="radio"
                  id="researcher"
                  className="text-primary focus:border-primary focus:ring-[#412c41] "
                  name="researcher"
                  value="代理店/販売店"
                  onChange={handleOnChangeResearcher1}
                  checked={isCheckboxResearcherState === 1}
                />
                <span className="ml-2">代理店 / 販売店</span>
              </label>
              <label className="inline-flex items-center">
                <input
                  required
                  type="radio"
                  id="researcher"
                  className="text-primary focus:border-primary focus:ring-[#412c41]"
                  name="researcher"
                  value="その他"
                  onChange={handleOnChangeResearcher2}
                  checked={isCheckboxResearcherState === 2}
                  placeholder=""
                />

                <span className="mx-2 whitespace-nowrap">その他</span>
                <input
                  type="text"
                  id="other_occupation"
                  name="other_occupation"
                  className="mt-1 block overflow-x-scroll border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm md:w-72"
                  onChange={handleOnChangeResearcherText}
                  value={otherOccupation}
                  disabled={enableOtherOccupation}
                  required
                />
              </label>
            </div>
          </div>
          <div className="mb-3 flex flex-col sm:flex-row sm:items-center">
            <div className="mr-3">ご住所*</div>
            <div className="flex flex-col sm:flex-row">
              <div className="flex">
                <label htmlFor="zipcode" className="mr-3 inline-flex items-center whitespace-nowrap">
                  〒
                </label>
                <input
                  id="zipcode"
                  name="zipcode"
                  type="text"
                  className="mt-1 block w-24 border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
                  autoComplete="postal-code"
                  placeholder="zip code"
                />
              </div>
              <div className="flex">
                <label htmlFor="address" className="mr-3 inline-flex items-center whitespace-nowrap sm:mx-3">
                  住所
                </label>
                <input
                  id="address1"
                  name="address1"
                  type="text"
                  className="mt-1 block w-20 border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:w-full sm:text-sm"
                  autoComplete="address-level1"
                  placeholder="Prefecture/State"
                  required
                />
                <input
                  id="address2"
                  name="address2"
                  type="text"
                  className="mx-2 mt-1 block w-20 border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:w-full sm:text-sm"
                  autoComplete="address-level2"
                  required
                  placeholder="City"
                />
                <input
                  id="address3"
                  name="address3"
                  type="text"
                  className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
                  autoComplete="street-address"
                  required
                  placeholder="Address"
                />
              </div>
            </div>
          </div>
          <div className="mb-3 flex flex-col justify-between sm:flex-row sm:items-center">
            <div className="mr-3">お電話番号*</div>
            <label htmlFor="phone1" className="mr-3 whitespace-nowrap"></label>
            <input
              id="phone1"
              name="phone1"
              type="text"
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
              autoComplete="tel"
              required
              placeholder="Phone Number"
            />
            <label htmlFor="phone2" className="mx-3 whitespace-nowrap">
              内線
            </label>
            <input
              id="phone2"
              name="phone2"
              type="text"
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
              placeholder="Extension/Secondary Phone Number"
            />
          </div>
          <div className="mb-3">
            <div className="flex flex-col sm:flex-row">
              <label htmlFor="email" className="mr-3 whitespace-nowrap">
                メール*
              </label>
              <input
                id="email"
                name="email"
                type="email"
                className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
                autoComplete="email"
                required
                placeholder="Email Address"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex flex-col sm:flex-row">
              <label htmlFor="speciality" className="mr-3 whitespace-nowrap">
                ご専⾨分野
              </label>
              <input
                id="speciality"
                name="speciality"
                type="text"
                className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
                placeholder="Field of Expertise"
              />
            </div>
          </div>
          <div className="mb-3">
            <div className="flex flex-col sm:flex-row">
              <label htmlFor="reference" className="mr-3 whitespace-nowrap">
                資料ご請求製品名
              </label>
              <input
                id="reference"
                name="reference"
                className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
                type="text"
                placeholder="Product name for which information is requested"
              ></input>
            </div>
          </div>
          <div className="mb-3">
            <label htmlFor="message">
              お問い合わせ内容 <small>（300⽂字以内）</small>
            </label>
            <textarea
              id="message"
              name="message"
              className="mt-1 block w-full border-gray-300 shadow-sm focus:border-primary focus:ring-[#a37da3] sm:text-sm"
              rows={3}
              maxLength={300}
            ></textarea>
          </div>

          <div className="my-6 flex">
            <span className="mr-5">ニュースレター配信</span>
            <div className="mt-0">
              <label className="inline-flex items-center">
                <input
                  type="radio"
                  id="newsletter"
                  className="text-primary focus:border-primary focus:ring-[#412c41] "
                  name="newsletter"
                  value="要"
                  onChange={handleOnChange}
                  checked={isCheckboxState === false}
                />
                <span className="ml-2">要</span>
              </label>
              <label className="ml-6 inline-flex items-center">
                <input
                  type="radio"
                  id="newsletter"
                  className="text-primary focus:border-primary focus:ring-[#412c41]"
                  name="newsletter"
                  value="不要"
                  onChange={handleOnChange}
                  checked={isCheckboxState === true}
                />
                <span className="ml-2">不要</span>
              </label>
            </div>
          </div>
          <div className="bg-gray-50 px-4 py-3 text-right sm:px-6">
            <button
              type="submit"
              className="w-full border border-gray-50 bg-gradient-to-r from-gray-400 to-gray-500 p-2 font-medium text-gray-200 shadow-md focus:from-[#885b88] focus:to-[#412c41] focus:outline-none focus:ring-2 focus:ring-offset-2"
            >
              送信
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
