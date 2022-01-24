import useWindowSize from "../../hooks/windowSize";
import {
    VerticalTimeline,
    VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";

const InteractMain = () => {
    const width = useWindowSize().width;

    const data = [
        {
            key: 0,
            label: "2019-2020",
            icon: "pi pi-clock",
            iconColor: "#000",
            iconBg: "#88f4ff",
            bgColor: "linear-gradient(235deg, #89f7fe 0%, #66a6ff 100%)",
            content: `Expanding its horizon from a flourishing fundraiser to the monthly awareness drives, Interact Club has never left a chance to stand itself out. 
            In the year 2019-20 the club collected 'Mata ki chunnis' , in collaboration with GOONJ so that they can make Lehengas with them and can release the financial burden from the shoulders of the underprivileged during the weddings.`,
        },
        {
            key: 1,
            label: "Project Colloquium",
            icon: "pi pi-money-bill",
            iconColor: "#618833",
            iconBg: "#d3ceed",
            bgColor:
                "radial-gradient( circle 588px at 31.7% 40.2%,  rgba(225,200,239,1) 21.4%, rgba(163,225,233,1) 57.1% )",
            content: `With Project Colloquium, we raised our finances to more than Rs. 50,000 and collaborated on an International level with countries like Sri Lanka. A platform was henceforth laid out to enhance speaking and listening skills , thus contributing to the holistic development of an individual.`,
        },
        {
            key: 2,
            label: "Project Lifeline",
            icon: "pi blood-drop",
            iconBg: "#9bea4e",
            bgColor: "linear-gradient(150deg, #f8ff00 0%, #3ad59f 100%)",
            content: `Another life saving initiative, Project Lifeline was launched for targeting the possible dearth of blood in the predicted unprecedented times. Blood Donation camp was scheduled in the school campus with all the covid protocols in mind and at last, the donors were also laureled for the purpose of donating their blood for a noble cause, induced through the one and only Gurukul Family. At the end it was a whooping success with over 100+ people registering for the drive and over 40+ donations. In December 2021, Interactors moved a step further to become compassionate beings.`,
        },
        {
            key: 3,
            label: "Project You",
            icon: "pi pi-heart-fill",
            iconColor: "#f44336",
            iconBg: "#e3ffe8",
            color: "#000",
            bgColor: "linear-gradient(90deg, #e3ffe7 0%, #d9e7ff 100%)",
            content: `When you are yourself, you can always come back to who you are, because your true essence never wavers. Keeping this in mind the Interact club of Gurukul the School launched Project YOU-Embracing who YOU are in the month of December 2021. In an era where accepting
            ourselves for who we are is considered revolutionary, we strive to educate young minds that embracing who you are is in fact, the need of the hour.`,
        },
        {
            key: 4,
            label: "Upcoming",
            icon: "pi pi-star-fill",
            iconColor: "#03a9f4",
            iconBg: "#f9fb80",
            color: "#000",
            bgColor: "linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)",
            content: `With consistency as their strength and Service above Self as their motto, Interact Club will continue to introduce glorious projects in the upcoming months. “Project Utho” shall be launched soon to raise awareness about a profound global issue, Climate Change. Moreover, a new striking fact shall be uploaded every Saturday on our social media handle for the inquisitive individuals. Along with Instagram and Facebook, we would like to raise our awareness on social media platforms to Twitter as well. Henceforth, the Club will soon launch its own Twitter account.`,
        },
    ];

    return (
        <div
            id="Interact-Main"
            className="flex flex-column align-items-center justify-content-center"
        >
            <div className="w-10 text-center text-white text-2xl mb-8">
                "Together, we see a world where people unite and take action to
                create lasting change — across the globe, in our communities,
                and in ourselves."
            </div>
            <div className="width-full">
                {/* {width >= 768 ? (
                    <Timeline
                        value={data}
                        opposite={(item) => item.opposite}
                        align="alternate"
                        // className="customized-timeline"
                        marker={customizedMarker}
                        content={customizedContent}
                    />
                ) : (
                    <div className="flex flex-column align-items-center">
                        {data.map((item) => {
                            return (
                                <div className="my-2" key={item.key}>
                                    <TechCard
                                        title={item.label}
                                        width={width * 0.9}
                                    >
                                        {item.content}
                                    </TechCard>
                                </div>
                            );
                        })}
                    </div>
                )}
            </div> */}
                {/* <TechCard
                title={"2019-2020"}
                content={`Expanding its horizon from a flourishing fundraiser to the monthly awareness drives, Interact Club has never left a chance to stand itself out. 
In the year 2019-20 the club collected 'Mata ki chunnis' , in collaboration with GOONJ so that they can make Lehengas with them and can release the financial burden from the shoulders of the underprivileged during the weddings.
`}
            />
            <TechCard
                title={"Project Colloquium"}
                content={`With Project Colloquium, we raised our finances to more than Rs. 50,000 and collaborated on an International level with countries like Sri Lanka. A platform was henceforth laid out to enhance speaking and listening skills , thus contributing to the holistic development of an individual.`}
            />{" "}
            <TechCard
                title={"Project Lifeline"}
                content={`Another life saving initiative, Project Lifeline was launched for targeting the possible dearth of blood in the predicted unprecedented times. Blood Donation camp was scheduled in the school campus with all the covid protocols in mind and at last, the donors were also laureled for the purpose of donating their blood for a noble cause, induced through the one and only Gurukul Family. At the end it was a whooping success with over 100+ people registering for the drive and over 40+ donations. In December 2021, Interactors moved a step further to become compassionate beings.`}
            />
            <TechCard
                title={"Project You"}
                content={`When you are yourself, you can always come back to who you are, because your true essence never wavers. Keeping this in mind the Interact club of Gurukul the School launched Project YOU-Embracing who YOU are in the month of December 2021. In an era where accepting
                ourselves for who we are is considered revolutionary, we strive to educate young minds that embracing who you are is in fact, the need of the hour.
                `}
            /> */}
                <VerticalTimeline>
                    {data.map((item) => {
                        return (
                            <VerticalTimelineElement
                                key={item.key}
                                className="vertical-timeline-element--work"
                                contentStyle={{
                                    background: item.bgColor,
                                    color: item.color || "#000",
                                }}
                                contentArrowStyle={{
                                    borderRight: `7px solid ${item.iconBg}`,
                                }}
                                date=""
                                iconStyle={{
                                    background: item.iconBg,
                                    color: item.iconColor || item.color,
                                }}
                                icon={
                                    <div className="flex justify-content-center align-items-center">
                                        <div className="align-self-center mt-2">
                                            <i
                                                className={
                                                    item.icon +
                                                    ` ${
                                                        width < 1170
                                                            ? "text-2xl"
                                                            : "text-5xl"
                                                    }`
                                                }
                                            />
                                        </div>
                                    </div>
                                }
                            >
                                <h1 className="vertical-timeline-element-title text-4xl">
                                    {item.label}
                                </h1>
                                <p>{item.content}</p>
                            </VerticalTimelineElement>
                        );
                    })}
                </VerticalTimeline>
            </div>
        </div>
    );
};

export default InteractMain;
