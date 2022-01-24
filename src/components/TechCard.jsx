import Card from "react-animated-3d-card";
import { Divider } from "primereact/divider";
// import { Card } from "primereact/card";

const TechCard = ({ title, children, width }) => {
    return (
        <Card
            shineStrength={0}
            borderRadius=".5rem"
            style={{
                maxWidth: width || "30rem",
                height: "fit-content",
            }}
        >
            <div
                className="flex flex-column h-full border-1"
                style={{ backgroundColor: "#121936", borderRadius: "0.5rem" }}
            >
                <div className="flex w-full mt-2">
                    <span
                        className="w-1rem border-circle ml-2 mr-1"
                        style={{ backgroundColor: "#ff5f56", height: "0.9rem" }}
                    />
                    <span
                        className="w-1rem border-circle mx-1"
                        style={{ backgroundColor: "#ffbd2e", height: "0.9rem" }}
                    />
                    <span
                        className="w-1rem border-circle mx-1"
                        style={{ backgroundColor: "#27c93f", height: "0.9rem" }}
                    />
                    <div className="font-mono w-full text-center">{title}</div>
                </div>
                <Divider className="mt-2 border-1 mb-0" />
                <div className="p-2 font-mono">{children}</div>
            </div>
        </Card>
    );
};

export default TechCard;
