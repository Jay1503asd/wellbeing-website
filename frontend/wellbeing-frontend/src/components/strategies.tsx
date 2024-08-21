import { useLocation } from 'react-router-dom';
import "./strategies.css"
import { useEffect, useState } from 'react';
import Navbar from './navbar';

const strategies = {
    Anger: [
        "Deep Breathing Exercises: Practice deep breathing techniques by inhaling deeply through the nose, holding the breath for a few seconds, and then slowly exhaling through the mouth.",
        "Time-Outs: Take a break when feeling overwhelmed. Step away from the situation for a few minutes to cool down.",
        "Physical Activity: Engage in physical activities such as jogging, dancing, or playing sports to release built-up tension.",
        "Journaling: Write down feelings in a journal to better understand the triggers and patterns of anger.",
        "Positive Visualization: Visualize a calm and peaceful place or scenario to help reduce anger.",
        "Talk It Out: Speak with a trusted friend or family member about what’s causing the anger.",
        "Use “I” Statements: Communicate feelings using 'I' statements to express emotions without blaming others."
    ],
    Anxiety: [
        "Deep Breathing Exercises: Practice deep breathing techniques, like inhaling for 4 seconds, holding for 7 seconds, and exhaling for 8 seconds.",
        "Mindfulness Meditation: Spend 5-10 minutes daily focusing on your breath and being present in the moment.",
        "Progressive Muscle Relaxation: Tense and relax different muscle groups to reduce physical tension and anxiety.",
        "Journaling: Write about your feelings and thoughts to process them and reduce anxiety.",
        "Positive Affirmations: Use positive self-talk to challenge negative thoughts.",
        "Visualization: Imagine a peaceful place or situation to calm your mind.",
        "Physical Activity: Engage in regular exercise to release tension and improve mood."
    ],
    Depression: [
        "Set Small Goals: Break tasks into smaller, manageable steps to avoid feeling overwhelmed.",
        "Stay Connected: Talk to friends or family members regularly for support.",
        "Regular Exercise: Physical activity can boost mood and energy levels.",
        "Healthy Eating: Maintain a balanced diet to support overall well-being.",
        "Sleep Hygiene: Ensure a regular sleep schedule and create a relaxing bedtime routine.",
        "Engage in Hobbies: Do activities you enjoy to lift your spirits.",
        "Gratitude Practice: Write down three things you are grateful for each day to shift focus from negative to positive aspects of life."
    ],
    "Eating Disorder": [
        "Regular Meals: Stick to a regular meal schedule, including balanced meals and snacks to maintain energy levels.",
        "Healthy Snacks: Keep healthy snacks available, such as fruits, nuts, and yogurt, to avoid unhealthy eating habits.",
        "Mindful Eating: Practice mindful eating by paying attention to the taste, texture, and smell of food, and eating slowly.",
        "Stay Hydrated: Drink plenty of water throughout the day to stay hydrated and reduce unnecessary snacking.",
        "Avoid Skipping Meals: Ensure not to skip meals, as it can lead to overeating later.",
        "Seek Support: Talk to a trusted adult or counselor if struggling with eating habits or body image.",
        "Balanced Diet Education: Learn about balanced diets and the importance of various nutrients in maintaining health."
    ],
    "Internet Addiction": [
        "Scheduled Breaks: Set specific times for gadget use and schedule regular breaks to do other activities.",
        "Screen-Free Zones: Create areas in the home or school where gadgets are not allowed, such as the dining area or bedrooms.",
        "Alternative Activities: Find hobbies or activities that do not involve screens, such as reading, sports, or crafts.",
        "Digital Detox: Designate one day a week as a digital detox day with no gadget use.",
        "Use Apps Wisely: Utilize apps that track screen time and set limits to manage gadget use better.",
        "Physical Interaction: Spend time with friends and family in person rather than communicating through screens.",
        "Prioritize Sleep: Turn off gadgets at least an hour before bedtime to ensure a good night's sleep."
    ]
};

const StrategiesPage = () => {
    const sectionNames = ['Anger', 'Anxiety', 'Depression', 'Eating Disorder', 'Internet Addiction'];
    const location = useLocation();
    const defaultScores = [100, 100, 100, 100, 100];
    const sectionScores = location.state?.sectionScores || defaultScores;
    console.log(location.state?.sectionScores)
    const [expandedSections, setExpandedSections] = useState<number[]>([]);

    const toggleSection = (index: number) => {
        if (expandedSections.includes(index)) {
            setExpandedSections(expandedSections.filter((i: any) => i !== index));
        } else {
            setExpandedSections([...expandedSections, index]);
        }
    };

    

    return (
        <>
        <Navbar />
        <div className="strategies-page">
            <h1 className="strategies-title">Recommended Strategies</h1>
            <div className="strategies-sections">
                {sectionScores.map((score: number, index: number) => {
                    const sectionName = sectionNames[index];
                    const isExpanded = expandedSections.includes(index);
                    const isStrength = score <= 50;

                    return (
                        <div key={index} className={`strategies-section ${isStrength ? 'strength-section' : 'development-section'}`}>
                            <div className="strategies-header" onClick={() => toggleSection(index)}>
                                <h2 className="strategies-section-title">
                                    {sectionName} Strategies
                                </h2>
                                {isStrength ? "" : <span className={`dropdown-arrow ${isExpanded ? 'expanded' : ''}`}>{isExpanded ? '—' : '+'}</span>}
                            </div>
                            {isStrength ? (
                                <p className="strength-message">This is your area of strength, keep up the good work!</p>
                            ) : isExpanded && (
                                <ul className="strategies-list">
                                    {strategies[sectionName as keyof typeof strategies]?.map((strategy, i) => (
                                        <li key={i} className="strategy-item">{strategy}</li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    );
                })}
            </div>
        </div>
        </>
    );
};

export default StrategiesPage;