import React from "react";

import "../css/custom.scss";

export default function Story() {
  return (
    <section className="mb-8 md:mb-8 px-6">
      <div className="w-full max-w-screen-2xl mx-auto z-30 relative">
        <div className="flex flex-col pt-8 md:pt-16">
          <h1 className="text-3xl md:text-6xl font-black !mb-5 leading-none tracking-tighter mb">
            Ancient Voices Unearthed: Winners of the First Deep Past Challenge
            <br />
          </h1>
          <div className="max-w-6xl md:text-xl text-lg font-medium !mb-8 md:w-full !leading-[110%] tracking-tight opacity-60">
            <span className="text-2xl text-yellow-500 dark:text-yellow-500 font-bold">
              Four thousand years ago, an Assyrian merchant pressed a stylus 
              into wet clay to record a debt. This spring, more than 10,000 people 
              in 105 countries signed up to teach a machine to read it.
            </span>
            <br />
            <br />
            The first Deep Past Challenge, Translate Akkadian to English, 
            ran on Kaggle from December 16, 2025 to March 23, 2026. 
            We asked the world's machine-learning community to translate 
            Old Assyrian business records from the merchant colony at 
            Kanesh (modern Kültepe, Türkiye): letters, loans and contracts 
            written in the world's oldest script. 
            <br />
            <table className="w-fit table-auto border-collapse text-left mt-5">
              <thead>
                <tr>
                  <th className="border-b border-current/30 py-2 pr-6 font-bold" scope="col">
                    Participation
                  </th>
                  <th className="border-b border-current/30 py-2" scope="col"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-current/20">
                <tr>
                  <td className="py-2 pr-6 opacity-80">Entrants</td>
                  <td className="py-2 opacity-80">10,743</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 opacity-80">Participants</td>
                  <td className="py-2 opacity-80">3,314</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 opacity-80">Teams</td>
                  <td className="py-2 opacity-80">2,674</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 opacity-80">Submissions</td>
                  <td className="py-2 opacity-80">68,346</td>
                </tr>
              </tbody>
            </table>
            <br />
            The largest contingents came from Japan, India, the United States, 
            China and the Netherlands. Entries were scored on the geometric mean 
            of two standard translation metrics, BLEU and chrF++, measured 
            against translations by expert Assyriologists on tablets the models 
            had never seen.
            <br />
            <br />
            Thousands of independent approaches arrived at the same answer. 
            Every winning team built on ByT5, Google's byte-level translation model, 
            in its Large or XL size: a striking consensus on how to read the world's 
            oldest script. First place tested newer decoder-only LLMs such as Qwen3 
            and TranslateGemma, and still found ByT5 stronger.
            <br />   
            <br />               
            The final ranking is based on the private leaderboard, the 66% of test 
            data no team saw until the close. The top six were separated by barely 
            two points.
            <br />
            <br />
            <table className="w-fit table-auto border-collapse text-left mt-5">
              <thead>
                <tr>
                  <th className="border-b border-current/30 py-2 pr-6 font-bold" scope="col">Place</th>
                  <th className="border-b border-current/30 py-2 pr-6 font-bold" scope="col">Team</th>
                  <th className="border-b border-current/30 py-2 font-bold" scope="col">Final Score</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-current/20">
                <tr>
                  <td className="py-2 pr-6 opacity-80">1st</td>
                  <td className="py-2 pr-6 opacity-80">DataTech Club</td>
                  <td className="py-2 opacity-80">42.8</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 opacity-80">2nd</td>
                  <td className="py-2 pr-6 opacity-80">KE WU</td>
                  <td className="py-2 opacity-80">41.9</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 opacity-80">3rd</td>
                  <td className="py-2 pr-6 opacity-80">How I Learned to Stop Worrying</td>
                  <td className="py-2 opacity-80">41.5</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 opacity-80">4th</td>
                  <td className="py-2 pr-6 opacity-80">Wisdom and Vitaly</td>
                  <td className="py-2 opacity-80">40.9</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 opacity-80">5th</td>
                  <td className="py-2 pr-6 opacity-80">ebi &amp; okumura</td>
                  <td className="py-2 opacity-80">40.8</td>
                </tr>
                <tr>
                  <td className="py-2 pr-6 opacity-80">6th</td>
                  <td className="py-2 pr-6 opacity-80">M &amp; J &amp; M</td>
                  <td className="py-2 opacity-80">40.7</td>
                </tr>
              </tbody>
            </table>
            <br />
            The community shared generously along the way: 531 public notebooks and 
            192 discussion threads, many now a ready-made starting point for anyone 
            working on low-resource ancient languages. Every submission is open 
            source, so any scholar, museum or student can build on the work of 
            all 2,674 teams.
            <br />
            <br />
            <div className="max-w-6xl md:text-xl text-lg font-medium !mb-8 md:w-full !leading-[110%] tracking-tight opacity-100">
            <span className="text-2xl text-yellow-500 dark:text-yellow-500 font-bold">
              Thank You! 
            </span></div>
            Congratulations to every team, and thank you to the 3,314 competitors 
            who spent their winter with Old Assyrian merchants. Our thanks also go 
            to Kaggle for hosting the challenge, and to the scholars whose decades 
            of editions and translations made it possible. As third place put it, 
            it was great to see performance improving right up to the final hour.
            <br />
            <br />
            We are grateful to our partners at Tokenworks, and to Adam Anderson 
            in particular, who kept pace with a very busy discussion board and a 
            deeply engaged community of Kagglers from launch to the final hour. 
            Finally, a special thanks to our generous funder, who made the Deep 
            Past Challenge possible.
            <br />
            <br />
            <center>⁂ ⁂ ⁂</center>
            <br />
            <br /> 
            Transliteration was only the first step. <b>The second Deep Past Challenge, 
            launching in December 2026, will tackle cuneiform sign recognition: 
            the most important part of the story.</b> reading the signs directly from 
            images of the tablets. Join us, and help bring more voices from the Bronze 
            Age back into the conversation.
          </div>
        </div>
      </div>
    </section>
  );
}
