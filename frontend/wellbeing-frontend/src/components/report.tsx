import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';
import { jsPDF } from 'jspdf';
import html2canvas from 'html2canvas';
import { Question } from "../pages/survey/survey questions/anger";
import './report.css';
import { useNavigate } from 'react-router-dom';


Chart.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

// Function to calculate total responses for all sections
export function calculateTotalResponse(questions: Question[]): number {
    let sum = 0;
    for (let i = 0; i < questions.length; i++) {
        sum += questions[i].response || 0;
    }
    return (sum / (questions.length * 5)) * 100;
}
// Function to calculate responses for a specific type of question
export function calculateTypeResponse(questions: Question[], type: string): number {
    const filtered = questions.filter((question: Question) => question.type.includes(type));
    return calculateTotalResponse(filtered);
}

const typeDescriptions: { [key: string]: string } = {
    "Passive Aggresive": "Tendency to express anger indirectly through subtle insults or non-cooperation.",
    "Explosive": "Prone to sudden outbursts of anger, often leading to physical or verbal aggression.",
    "Hardened": "Holding onto anger for long periods, leading to grudges and unresolved feelings.",
    "Vengeful": "Desire for revenge and holding onto thoughts of retribution.",
    "Chronic": "Persistent anger that affects daily life, often with no specific trigger.",
    "Incidental": "Anger that is triggered by specific situations and helps to resolve issues.",
    "Empathic": "Anger felt on behalf of others, especially in situations of perceived injustice.",
    "General Anxiety": "A state of constant worry or fear about a variety of situations.",
    "Social Anxiety": "Intense fear or discomfort in social situations, leading to avoidance behavior.",
    "Exam Anxiety": "Excessive worry about exams or academic performance, affecting focus and results.",
    "Body Dysmorphic Disorder": "Obsession with perceived physical flaws, leading to distress and compulsive behavior.",
    "Bulimia": "Binge eating followed by purging to avoid weight gain.",
    "Anorexia Nervosa": "Extreme fear of gaining weight, leading to severe food restriction and weight loss.",
    "Orthorexia Nervosa": "Obsession with eating only healthy foods, leading to restrictive diets and anxiety about food."
};

interface ReportPageProps {
    filledQuestions: Question[][];
}

const ReportPage: React.FC<ReportPageProps> = ({ filledQuestions }) => {
    const sectionNames = ['General', 'Anger', 'Anxiety', 'Depression', 'Eating Disorder', 'Internet Addiction'];
    const navigate = useNavigate();
    // Calculate section-wise data for the bar chart
    const sectionScores = filledQuestions.map(questions => calculateTotalResponse(questions))
    const sectionData = filledQuestions.map(questions => {
        const totalResponse = calculateTotalResponse(questions);
        return totalResponse <= 50 ? totalResponse : 50 - totalResponse;
    });
    // const sectionScores = [51, 30, 61, 69, 25, 69]
    // const sectionData = sectionScores.map(totalResponse => {return totalResponse <= 50 ? totalResponse : 50 - totalResponse})

    // Bar chart data
    const data = {
        labels: sectionNames,
        datasets: [{
            label: 'Survey Response (%)',
            data: sectionData,
            backgroundColor: sectionData.map(value => {
                if (value < 0) return 'rgba(255, 99, 132, 0.2)'; // Red for below 0
                if (value < 10) return 'rgba(54, 162, 235, 0.2)'; // Light Blue for 0 to 10
                if (value < 20) return 'rgba(255, 206, 86, 0.2)'; // Amber for 10 to 20
                return 'rgba(75, 192, 192, 0.2)'; // Green for above 20
            }),
            borderColor: sectionData.map(value => {
                if (value < 0) return 'rgba(255, 99, 132, 1)';
                if (value < 10) return 'rgba(54, 162, 235, 1)';
                if (value < 20) return 'rgba(255, 206, 86, 1)';
                return 'rgba(75, 192, 192, 1)';
            }),
            borderWidth: 1
        }]
    };

    // Bar chart options
    const options = {
        scales: {
            y: {
                beginAtZero: true,
                min: -50,
                max: 50,
                title: {
                    display: true,
                    text: "Areas of Developments                       Areas of Strengths",
                    font: {
                        size: 14,
                    },
                    color: '#000'
                },
                ticks: {
                    callback: (value: any) => {
                        if (value == 0) return "";
                    }
                },
                grid: {
                    color: (context: any) => (context.tick.value === 0 ? '#000' : '#ccc'),
                    lineWidth: (context: any) => (context.tick.value === 0 ? 2 : 1),
                },
            },
        },
        plugins: {
            legend: {
                display: false,
            },
        },
    };
    
    const viewStrategies = () => {
        navigate('/strategies', { state: { sectionScores, passed: true } });
    };

    // Function to generate PDF
    const generatePDF = () => {
        const input = document.getElementById('report-content');
        if (input) {
            html2canvas(input, { scale: 2 }).then((canvas) => {
                const imgData = canvas.toDataURL('image/png');
                const pdf = new jsPDF('p', 'mm', 'a4'); // A4 size (210mm x 297mm)

                const pdfWidth = pdf.internal.pageSize.getWidth();
                const pdfHeight = pdf.internal.pageSize.getHeight();

                // Get image dimensions
                const imgProps = pdf.getImageProperties(imgData);
                const imgHeight = (imgProps.height * pdfWidth) / imgProps.width;

                let heightLeft = imgHeight;
                let position = 0;

                // Add the first page
                pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                heightLeft -= pdfHeight;

                // Add extra pages if necessary
                while (heightLeft > 0) {
                    position = heightLeft - imgHeight;
                    pdf.addPage();
                    pdf.addImage(imgData, 'PNG', 0, position, pdfWidth, imgHeight);
                    heightLeft -= pdfHeight;
                }

                pdf.save('survey-report.pdf');
            });
        }
    };
  
    return (
        <div className="report-page">
            <h1 className="report-title">Survey Report</h1>
            <div id="report-content">
                <div className="report-sections">
                    {filledQuestions.map((questions, sectionIndex) => (
                        <div key={sectionIndex} className="report-section">
                            <h2 className="section-title">{sectionNames[sectionIndex]}</h2>
                            <div className="section-summary">
                                <p>Total Response: {calculateTotalResponse(questions).toFixed(2)}%</p>
                            </div>
                            <div className="type-breakdown">
                                {Object.keys(typeDescriptions).map((type) => {
                                    const typeScore = calculateTypeResponse(questions, type);
                                    return typeScore > 0 ? (
                                        <div key={type} className="type-section">
                                            <h3 className="type-title">{type}</h3>
                                            <p className="type-score">Score: {typeScore.toFixed(2)}%</p>
                                            <p className="type-description">{typeDescriptions[type]}</p>
                                        </div>
                                    ) : null;
                                })}
                            </div>
                        </div>
                    ))}
                </div>

                {/* Bar Chart */}
                <div className="chart-container">
                    <h2>Section-wise Survey Response</h2>
                    <Bar data={data} options={options} />
                </div>
            </div>

            <div style = {{display: "flex", gap: "0.75rem", justifyContent: "center", padding: "0.75rem"}} >
                <button onClick={generatePDF}>Download as PDF</button>
                <button onClick = {() => navigate("/dashboard")}> Dashboard </button>
                <button onClick = {viewStrategies}> View Strategies </button>
            </div>

        </div>
    );
};

export default ReportPage;
