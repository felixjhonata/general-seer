const getPredictedAge = async (name: string) => {
    const res = await fetch(`https://api.agify.io/?name=${name}`);
    return res.json();
}
const getPredictedGender = async (name: string) => {
    const res = await fetch(`https://api.genderize.io/?name=${name}`);
    return res.json();
}
const getPredictedCountry = async (name: string) => {
    const res = await fetch(`https://api.nationalize.io/?name=${name}`);
    return res.json();
}

interface Params {
    params: { name: string };
}

export default async function Prediction({ params }: Params) {
    const ageData = getPredictedAge(params.name);
    const genderData = getPredictedGender(params.name);
    const countryData = getPredictedCountry(params.name);

    const [age, gender, country] = await Promise.all([ageData, genderData, countryData]);
    const regionNames = new Intl.DisplayNames(['en'], {type: 'region'});
    return (
        <div className="flex items-center justify-center h-screen">
            <div className="bg-white p-10">
                <h1 className="text-black text-xl font-bold">
                    Personal Info
                </h1>
                <div className="text-black"><span className="font-bold">Age:</span> {age?.age}</div>
                <div className="text-black"><span className="font-bold">Gender:</span> {gender?.gender}</div>
                <div className="text-black"><span className="font-bold">Country:</span> {regionNames.of(country?.country[0]?.country_id)}</div>
            </div>
        </div>
    )
}
