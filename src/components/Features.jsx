import React from 'react';
import Card from './reuseable/Card';
import tradingSignalsImage from '../../public/trading_signals_sharing.jpg'; // replace with actual image paths
import investmentOpportunitiesImage from '../../public/investment_opportunities.jpg';
import marketInsightsImage from '../../public/market_insights.jpg';
import communityEngagementImage from '../../public/community_engagement.jpg';
import educationalResourcesImage from '../../public/educational_resources.jpg';
import secureTransactionsImage from '../../public/secure_transactions.jpg';
import backgroundImage from "../../public/starsbg.png"

const Features = () => {

    const cards = [
        {
            image: tradingSignalsImage,
            title: "Trading signals sharing",
            description: "Connect with traders to share and receive signals for crypto, stocks, gold, and more.",
        },
        {
            image: investmentOpportunitiesImage,
            title: "Investment opportunities",
            description: "Explore innovative ways to invest in Signal Vase using EtherealCash.",
        },
        {
            image: marketInsightsImage,
            title: "Market insights",
            description: "Access valuable insights into market trends and trading strategies.",
        },
        {
            image: communityEngagementImage,
            title: "Community engagement",
            description: "Connect, interact, and collaborate with a diverse community of traders.",
        },
        {
            image: educationalResourcesImage,
            title: "Educational resources",
            description: "Access a wealth of educational materials to enhance your trading knowledge.",
        },
        {
            image: secureTransactionsImage,
            title: "Secure transactions",
            description: "Ensure safe and secure transactions using EtherealCash on Signal Vase.",
        },
    ];

    return (
        <div
            id='feature'
            className="p-8 items-center justify-center flex flex-col overflow-x-hidden pt-[6rem]"

        >
            <div className="text-center mb-8">
                <h2 className="text-xl font-bold text-orange-500">Trading Signal Platform</h2>
                <h1 className="text-2xl font-bold">Access to market insights</h1>
                <p>Join Signal Vase to access a diverse range of trading signals for cryptocurrencies, stocks, gold, and more. Gain valuable insights from both newbies and experienced traders on the platform.</p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3 md:w-[80%] w-full">
                {cards.map((cardData, index) => <Card key={index} cardData={cardData} />)}
            </div>


        </div>
    );
};

export default Features;
