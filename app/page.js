"use client";

import React, { useState, useEffect } from "react";

export default function Home() {
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  async function handleSubmit(e) {
    e.preventDefault();
    setLoading(true);
    setSuccess(false);
    setError(false);
    const form = e.target;
    const name = form.name.value;
    const email = form.email.value;
    const country = form.country.value;
    const contact = form.contact.value;
    try {
      const res = await fetch(
        "https://n8n-app.eastus.cloudapp.azure.com:5678/webhook/1abdbdf0-136c-4f31-88f0-fbb15254994f",
        {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ name, email, country, contact }),
        }
      );
      if (res.ok) {
        setSuccess(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    }
    setLoading(false);
  }

  // Prevent hydration mismatch by not rendering until mounted
  if (!mounted) {
    return (
      <div className="font-sans min-h-screen flex items-center justify-center bg-white wave-pattern p-4">
        <div className="w-full max-w-full sm:max-w-md form-container rounded-2xl p-6 sm:p-8 flex flex-col gap-6 relative">
          <div className="animate-pulse">
            <div className="h-8 bg-gray-200 rounded mb-4"></div>
            <div className="h-4 bg-gray-200 rounded mb-2"></div>
            <div className="h-4 bg-gray-200 rounded mb-6"></div>
            <div className="space-y-4">
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
              <div className="h-10 bg-gray-200 rounded"></div>
            </div>
            <div className="h-12 bg-gray-200 rounded mt-6"></div>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="font-sans min-h-screen flex items-center justify-center bg-white wave-pattern p-4">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-full sm:max-w-md form-container rounded-2xl p-6 sm:p-8 flex flex-col gap-6 relative"
      >
        <button
          type="button"
          aria-label="Close"
          className="absolute top-4 right-4 text-gray-400 hover:text-red-500 text-xl focus:outline-none"
        >
          &times;
        </button>

        {/* Header Section */}
        <div className="text-center mb-4">
          <h1 className="text-3xl sm:text-4xl font-bold text-black leading-tight mb-2">
            Procope AI
          </h1>
          <h2 className="text-xl sm:text-2xl font-semibold text-black leading-tight mb-3">
            Fill the form — get a call in 10 seconds
          </h2>
          <div className="w-16 h-1 bg-black mx-auto mb-4"></div>
        </div>

        {/* Description */}
        <div className="text-center mb-6">
          <p className="text-[#666666] text-base leading-relaxed mb-3">
            We provide AI Automation services for industries like Real Estate,
            Medical Industry, Hospitality, Hotels, and Restaurants.
          </p>
          <p className="text-[#666666] text-base leading-relaxed">
            Services include{" "}
            <span className="font-semibold text-black">AI Agents</span>,
            <span className="font-semibold text-black">
              {" "}
              AI Call Assistants
            </span>
            ,<span className="font-semibold text-black"> AI Chatbots</span>,
            <span className="font-semibold text-black"> Meta Automation</span>,
            <span className="font-semibold text-black">
              {" "}
              WhatsApp Automation
            </span>
            , and custom AI Agents & custom Automation.
          </p>
        </div>

        {/* Form Fields */}
        <div className="flex flex-col gap-5">
          <label htmlFor="name" className="flex flex-col gap-2 w-full">
            <span className="text-sm font-semibold text-black">Name</span>
            <input
              id="name"
              type="text"
              name="name"
              required
              placeholder="Your Full  Name"
              className="form-input px-4 py-3 rounded-lg bg-white focus:outline-none w-full text-black placeholder-[#999999]"
            />
          </label>

          <label htmlFor="email" className="flex flex-col gap-2 w-full">
            <span className="text-sm font-semibold text-black">Email</span>
            <input
              id="email"
              type="email"
              name="email"
              required
              placeholder="you@email.com"
              className="form-input px-4 py-3 rounded-lg bg-white focus:outline-none w-full text-black placeholder-[#999999]"
            />
          </label>

          <label htmlFor="contact" className="flex flex-col gap-2 w-full">
            <span className="text-sm font-semibold text-black">
              Phone Number <span className="text-black">*</span>
            </span>
            <div className="flex gap-3 w-full">
              <select
                name="country"
                aria-label="Country code"
                className="form-input px-3 py-3 rounded-lg bg-white focus:outline-none max-h-48 overflow-y-auto w-32 sm:w-40 text-black"
                defaultValue="1"
              >
                <option value="1">🇺🇸 USA (+1)</option>
                <option value="44">🇬🇧 UK (+44)</option>
                <option value="971">🇦🇪 UAE (+971)</option>
                <option value="92">🇵🇰 Pakistan (+92)</option>
                <option value="91">🇮🇳 India (+91)</option>
                <option value="213">🇩🇿 Algeria (+213)</option>
                <option value="376">🇦🇩 Andorra (+376)</option>
                <option value="244">🇦🇴 Angola (+244)</option>
                <option value="1264">🇦🇮 Anguilla (+1264)</option>
                <option value="1268">🇦🇬 Antigua & Barbuda (+1268)</option>
                <option value="54">🇦🇷 Argentina (+54)</option>
                <option value="374">🇦🇲 Armenia (+374)</option>
                <option value="297">🇦🇼 Aruba (+297)</option>
                <option value="61">🇦🇺 Australia (+61)</option>
                <option value="43">🇦🇹 Austria (+43)</option>
                <option value="994">🇦🇿 Azerbaijan (+994)</option>
                <option value="1242">🇧🇸 Bahamas (+1242)</option>
                <option value="973">🇧🇭 Bahrain (+973)</option>
                <option value="880">🇧🇩 Bangladesh (+880)</option>
                <option value="1246">🇧🇧 Barbados (+1246)</option>
                <option value="375">🇧🇾 Belarus (+375)</option>
                <option value="32">🇧🇪 Belgium (+32)</option>
                <option value="501">🇧🇿 Belize (+501)</option>
                <option value="229">🇧🇯 Benin (+229)</option>
                <option value="1441">🇧🇲 Bermuda (+1441)</option>
                <option value="975">🇧🇹 Bhutan (+975)</option>
                <option value="591">🇧🇴 Bolivia (+591)</option>
                <option value="387">🇧🇦 Bosnia Herzegovina (+387)</option>
                <option value="267">🇧🇼 Botswana (+267)</option>
                <option value="55">🇧🇷 Brazil (+55)</option>
                <option value="673">🇧🇳 Brunei (+673)</option>
                <option value="359">🇧🇬 Bulgaria (+359)</option>
                <option value="226">🇧🇫 Burkina Faso (+226)</option>
                <option value="257">🇧🇮 Burundi (+257)</option>
                <option value="855">🇰🇭 Cambodia (+855)</option>
                <option value="237">🇨🇲 Cameroon (+237)</option>
                <option value="1">🇨🇦 Canada (+1)</option>
                <option value="238">🇨🇻 Cape Verde Islands (+238)</option>
                <option value="1345">🇰🇾 Cayman Islands (+1345)</option>
                <option value="236">🇨🇫 Central African Republic (+236)</option>
                <option value="56">🇨🇱 Chile (+56)</option>
                <option value="86">🇨🇳 China (+86)</option>
                <option value="57">🇨🇴 Colombia (+57)</option>
                <option value="269">🇰🇲 Comoros (+269)</option>
                <option value="242">🇨🇬 Congo (+242)</option>
                <option value="682">🇨🇰 Cook Islands (+682)</option>
                <option value="506">🇨🇷 Costa Rica (+506)</option>
                <option value="385">🇭🇷 Croatia (+385)</option>
                <option value="53">🇨🇺 Cuba (+53)</option>
                <option value="90392">🇨🇾 Cyprus North (+90392)</option>
                <option value="357">🇨🇾 Cyprus South (+357)</option>
                <option value="42">🇨🇿 Czech Republic (+42)</option>
                <option value="45">🇩🇰 Denmark (+45)</option>
                <option value="253">🇩🇯 Djibouti (+253)</option>
                <option value="1809">🇩🇲 Dominican Republic (+1809)</option>
                <option value="593">🇪🇨 Ecuador (+593)</option>
                <option value="20">🇪🇬 Egypt (+20)</option>
                <option value="503">🇸🇻 El Salvador (+503)</option>
                <option value="240">🇬🇶 Equatorial Guinea (+240)</option>
                <option value="291">🇪🇷 Eritrea (+291)</option>
                <option value="372">🇪🇪 Estonia (+372)</option>
                <option value="251">🇪🇹 Ethiopia (+251)</option>
                <option value="500">🇫🇰 Falkland Islands (+500)</option>
                <option value="298">🇫🇴 Faroe Islands (+298)</option>
                <option value="679">🇫🇯 Fiji (+679)</option>
                <option value="358">🇫🇮 Finland (+358)</option>
                <option value="33">🇫🇷 France (+33)</option>
                <option value="594">🇬🇫 French Guiana (+594)</option>
                <option value="689">🇵🇫 French Polynesia (+689)</option>
                <option value="241">🇬🇦 Gabon (+241)</option>
                <option value="220">🇬🇲 Gambia (+220)</option>
                <option value="7880">🇬🇪 Georgia (+7880)</option>
                <option value="49">🇩🇪 Germany (+49)</option>
                <option value="233">🇬🇭 Ghana (+233)</option>
                <option value="350">🇬🇮 Gibraltar (+350)</option>
                <option value="30">🇬🇷 Greece (+30)</option>
                <option value="299">🇬🇱 Greenland (+299)</option>
                <option value="1473">🇬🇩 Grenada (+1473)</option>
                <option value="590">🇬🇵 Guadeloupe (+590)</option>
                <option value="671">🇬🇺 Guam (+671)</option>
                <option value="502">🇬🇹 Guatemala (+502)</option>
                <option value="224">🇬🇳 Guinea (+224)</option>
                <option value="245">🇬🇼 Guinea - Bissau (+245)</option>
                <option value="592">🇬🇾 Guyana (+592)</option>
                <option value="509">🇭🇹 Haiti (+509)</option>
                <option value="504">🇭🇳 Honduras (+504)</option>
                <option value="852">🇭🇰 Hong Kong (+852)</option>
                <option value="36">🇭🇺 Hungary (+36)</option>
                <option value="354">🇮🇸 Iceland (+354)</option>
                <option value="62">🇮🇩 Indonesia (+62)</option>
                <option value="98">🇮🇷 Iran (+98)</option>
                <option value="964">🇮🇶 Iraq (+964)</option>
                <option value="353">🇮🇪 Ireland (+353)</option>
                <option value="972">🇮🇱 Israel (+972)</option>
                <option value="39">🇮🇹 Italy (+39)</option>
                <option value="1876">🇯🇲 Jamaica (+1876)</option>
                <option value="81">🇯🇵 Japan (+81)</option>
                <option value="962">🇯🇴 Jordan (+962)</option>
                <option value="7">🇰🇿 Kazakhstan (+7)</option>
                <option value="254">🇰🇪 Kenya (+254)</option>
                <option value="686">🇰🇮 Kiribati (+686)</option>
                <option value="850">🇰🇵 Korea North (+850)</option>
                <option value="82">🇰🇷 Korea South (+82)</option>
                <option value="965">🇰🇼 Kuwait (+965)</option>
                <option value="996">🇰🇬 Kyrgyzstan (+996)</option>
                <option value="856">🇱🇦 Laos (+856)</option>
                <option value="371">🇱🇻 Latvia (+371)</option>
                <option value="961">🇱🇧 Lebanon (+961)</option>
                <option value="266">🇱🇸 Lesotho (+266)</option>
                <option value="231">🇱🇷 Liberia (+231)</option>
                <option value="218">🇱🇾 Libya (+218)</option>
                <option value="423">🇱🇮 Liechtenstein (+423)</option>
                <option value="370">🇱🇹 Lithuania (+370)</option>
                <option value="352">🇱🇺 Luxembourg (+352)</option>
                <option value="853">🇲🇴 Macao (+853)</option>
                <option value="389">🇲🇰 Macedonia (+389)</option>
                <option value="261">🇲🇬 Madagascar (+261)</option>
                <option value="265">🇲🇼 Malawi (+265)</option>
                <option value="60">🇲🇾 Malaysia (+60)</option>
                <option value="960">🇲🇻 Maldives (+960)</option>
                <option value="223">🇲🇱 Mali (+223)</option>
                <option value="356">🇲🇹 Malta (+356)</option>
                <option value="692">🇲🇭 Marshall Islands (+692)</option>
                <option value="596">🇲🇶 Martinique (+596)</option>
                <option value="222">🇲🇷 Mauritania (+222)</option>
                <option value="230">🇲🇺 Mauritius (+230)</option>
                <option value="52">🇲🇽 Mexico (+52)</option>
                <option value="691">🇫🇲 Micronesia (+691)</option>
                <option value="373">🇲🇩 Moldova (+373)</option>
                <option value="377">🇲🇨 Monaco (+377)</option>
                <option value="976">🇲🇳 Mongolia (+976)</option>
                <option value="1664">🇲🇸 Montserrat (+1664)</option>
                <option value="212">🇲🇦 Morocco (+212)</option>
                <option value="258">🇲🇿 Mozambique (+258)</option>
                <option value="95">🇲🇲 Myanmar (+95)</option>
                <option value="264">🇳🇦 Namibia (+264)</option>
                <option value="674">🇳🇷 Nauru (+674)</option>
                <option value="977">🇳🇵 Nepal (+977)</option>
                <option value="31">🇳🇱 Netherlands (+31)</option>
                <option value="599">🇧🇶 Netherlands Antilles (+599)</option>
                <option value="687">🇳🇨 New Caledonia (+687)</option>
                <option value="64">🇳🇿 New Zealand (+64)</option>
                <option value="505">🇳🇮 Nicaragua (+505)</option>
                <option value="227">🇳🇪 Niger (+227)</option>
                <option value="234">🇳🇬 Nigeria (+234)</option>
                <option value="683">🇳🇺 Niue (+683)</option>
                <option value="672">🇳🇫 Norfolk Islands (+672)</option>
                <option value="670">🇲🇵 Northern Marianas (+670)</option>
                <option value="47">🇳🇴 Norway (+47)</option>
                <option value="968">🇴🇲 Oman (+968)</option>
                <option value="680">🇵🇼 Palau (+680)</option>
                <option value="507">🇵🇦 Panama (+507)</option>
                <option value="675">🇵🇬 Papua New Guinea (+675)</option>
                <option value="595">🇵🇾 Paraguay (+595)</option>
                <option value="51">🇵🇪 Peru (+51)</option>
                <option value="63">🇵🇭 Philippines (+63)</option>
                <option value="48">🇵🇱 Poland (+48)</option>
                <option value="351">🇵🇹 Portugal (+351)</option>
                <option value="1787">🇵🇷 Puerto Rico (+1787)</option>
                <option value="974">🇶🇦 Qatar (+974)</option>
                <option value="262">🇷🇪 Reunion (+262)</option>
                <option value="40">🇷🇴 Romania (+40)</option>
                <option value="7">🇷🇺 Russia (+7)</option>
                <option value="250">🇷🇼 Rwanda (+250)</option>
                <option value="378">🇸🇲 San Marino (+378)</option>
                <option value="239">🇸🇹 Sao Tome & Principe (+239)</option>
                <option value="966">🇸🇦 Saudi Arabia (+966)</option>
                <option value="221">🇸🇳 Senegal (+221)</option>
                <option value="381">🇷🇸 Serbia (+381)</option>
                <option value="248">🇸🇨 Seychelles (+248)</option>
                <option value="232">🇸🇱 Sierra Leone (+232)</option>
                <option value="65">🇸🇬 Singapore (+65)</option>
                <option value="421">🇸🇰 Slovak Republic (+421)</option>
                <option value="386">🇸🇮 Slovenia (+386)</option>
                <option value="677">🇸🇧 Solomon Islands (+677)</option>
                <option value="252">🇸🇴 Somalia (+252)</option>
                <option value="27">🇿🇦 South Africa (+27)</option>
                <option value="34">🇪🇸 Spain (+34)</option>
                <option value="94">🇱🇰 Sri Lanka (+94)</option>
                <option value="290">🇸🇭 St. Helena (+290)</option>
                <option value="1869">🇰🇳 St. Kitts (+1869)</option>
                <option value="1758">🇱🇨 St. Lucia (+1758)</option>
                <option value="249">🇸🇩 Sudan (+249)</option>
                <option value="597">🇸🇷 Suriname (+597)</option>
                <option value="268">🇸🇿 Swaziland (+268)</option>
                <option value="46">🇸🇪 Sweden (+46)</option>
                <option value="41">🇨🇭 Switzerland (+41)</option>
                <option value="963">🇸🇾 Syria (+963)</option>
                <option value="886">🇹🇼 Taiwan (+886)</option>
                <option value="7">🇹🇯 Tajikstan (+7)</option>
                <option value="66">🇹🇭 Thailand (+66)</option>
                <option value="228">🇹🇬 Togo (+228)</option>
                <option value="676">🇹🇴 Tonga (+676)</option>
                <option value="1868">🇹🇹 Trinidad & Tobago (+1868)</option>
                <option value="216">🇹🇳 Tunisia (+216)</option>
                <option value="90">🇹🇷 Turkey (+90)</option>
                <option value="7">🇹🇲 Turkmenistan (+7)</option>
                <option value="993">🇹🇲 Turkmenistan (+993)</option>
                <option value="1649">🇹🇨 Turks & Caicos Islands (+1649)</option>
                <option value="688">🇹🇻 Tuvalu (+688)</option>
                <option value="256">🇺🇬 Uganda (+256)</option>
                <option value="380">🇺🇦 Ukraine (+380)</option>
                <option value="598">🇺🇾 Uruguay (+598)</option>
                <option value="7">🇺🇿 Uzbekistan (+7)</option>
                <option value="678">🇻🇺 Vanuatu (+678)</option>
                <option value="379">🇻🇦 Vatican City State (+379)</option>
                <option value="58">🇻🇪 Venezuela (+58)</option>
                <option value="84">🇻🇳 Vietnam (+84)</option>
                <option value="84">🇻🇳 Virgin Islands - British (+1284)</option>
                <option value="84">🇻🇳 Virgin Islands - US (+1340)</option>
                <option value="681">🇼🇫 Wallis & Futuna (+681)</option>
                <option value="969">🇾🇪 Yemen North (+969)</option>
                <option value="967">🇾🇪 Yemen South (+967)</option>
                <option value="260">🇿🇲 Zambia (+260)</option>
                <option value="263">🇿🇼 Zimbabwe (+263)</option>
              </select>
              <input
                id="contact"
                type="tel"
                name="contact"
                required
                placeholder="Phone Number"
                className="form-input flex-1 px-4 py-3 rounded-lg bg-white focus:outline-none text-black placeholder-[#999999]"
              />
            </div>
          </label>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="form-button-primary text-white rounded-lg py-4 font-semibold text-lg shadow-lg focus:outline-none focus:ring-2 focus:ring-black/20 w-full mt-4"
          disabled={loading}
        >
          {loading ? (
            <span className="flex items-center justify-center">
              <svg
                className="animate-spin -ml-1 mr-3 h-5 w-5 text-white"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
              >
                <circle
                  className="opacity-25"
                  cx="12"
                  cy="12"
                  r="10"
                  stroke="currentColor"
                  strokeWidth="4"
                ></circle>
                <path
                  className="opacity-75"
                  fill="currentColor"
                  d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                ></path>
              </svg>
              Sending...
            </span>
          ) : (
            "Call Me Now!"
          )}
        </button>

        {/* Success/Error Messages */}
        {success && (
          <div className="bg-green-50 border border-green-200 rounded-lg p-4 mt-4">
            <p className="text-green-800 text-center text-sm">
              ✅ Submitted successfully! You will receive a call within the next
              60 seconds!
            </p>
          </div>
        )}
        {error && (
          <div className="bg-red-50 border border-red-200 rounded-lg p-4 mt-4">
            <p className="text-red-800 text-center text-sm">
              ❌ Something went wrong. Please try again.
            </p>
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-6 pt-4 border-t border-gray-200">
          <p className="text-xs text-[#666666]">
            Procope AI — Automation for modern businesses
          </p>
        </div>
      </form>
    </div>
  );
}
