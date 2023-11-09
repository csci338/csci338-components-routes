import "./Profile.css";
import { Card } from "antd";
import Sheet from "../component/Sheet";

const { Meta } = Card;

function Profile() {
    return (
        <div className="Child">
            <section>
                <h1>Profile Component</h1>
            </section>
            <section className="grid">
                <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={
                        <img
                            alt="example"
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                    }
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card>
                <Card
                    hoverable
                    style={{ width: "100%" }}
                    cover={
                        <img
                            alt="example"
                            src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                        />
                    }
                >
                    <Meta
                        title="Europe Street beat"
                        description="www.instagram.com"
                    />
                </Card>
            </section>

            <section>
                <Sheet
                    title="User Profile Details"
                    buttonText="Show Profile Detail"
                >
                    <section className="grid-two-col">
                        <Card
                            hoverable
                            style={{ width: "100%" }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                        <Card
                            hoverable
                            style={{ width: "100%" }}
                            cover={
                                <img
                                    alt="example"
                                    src="https://os.alipayobjects.com/rmsportal/QBnOOoLaAfKPirc.png"
                                />
                            }
                        >
                            <Meta
                                title="Europe Street beat"
                                description="www.instagram.com"
                            />
                        </Card>
                    </section>
                </Sheet>
            </section>
        </div>
    );
}

export default Profile;
