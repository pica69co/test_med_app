import React, { useState, useEffect } from "react";
import "./ReportLayout.css"
const ReportsLayout = () => {
    const [reports, setReports] = useState([]);
   // const constReportURL = process.env.PUBLIC_URL + "/patient_report.pdf"
    
   // Sample reports data (this will eventually be fetched or retrieved from localStorage)

    const sampleReports = [
        {
            "id": "1",
            "doctorName": "Dr. John Doe",
            "doctorSpecialty": "Cardiology",
           // "reportUrl": constReportURL  // Path to the report file
        },
        {
            "id": "2",
            "doctorName": "Dr. Jane Smith",
            "doctorSpecialty": "Neurology",
           // "reportUrl": constReportURL // Same report for demo
        }
    ];

    // Fetch the reports when the component mounts
    // useEffect(() => {
    //     // setReports(sampleReports);
    //     const storedAppointmentData = JSON.parse(localStorage.getItem('appointments'));
    //     setReports(storedAppointmentData)
    // }, []);

    // Function to handle downloading the report
    // const handleDownloadReport = (reportUrl) => {
    //     const link = document.createElement('a');
    //     link.href = reportUrl;
    //     link.download = reportUrl.split('/').pop(); // Extract the file name from the URL
    //     link.click();
    // };

    // Function to handle viewing the report (open in a new tab)
    
    // const handleViewReport = (reportUrl) => {
    //     window.open(reportUrl, '_blank');
    // };

    const pdfUrl = './patient_report.pdf'

    return (
        <div className="reports-container">
        <h1>Reports</h1>
        <table className="reports-table">
          <thead>
            <tr>
              <th>Serial Number</th>
              <th>Doctor Name</th>
              <th>Doctor Speciality</th>
              <th>View Report</th>
              <th>Download Report</th>
            </tr>
          </thead>
          <tbody>
            {sampleReports.map((report, index) => (
              <tr key={report.id}>
                <td>{index + 1}</td>
                <td>{report.doctorName}</td>
                <td>{report.doctorSpecialty}</td>
                <td>
                <a href={pdfUrl} target="_blank" rel="noopener noreferrer">
                  <button>View Report</button>
                 </a>              
                 </td>
                <td>
                <a href={pdfUrl} download="patient-report.pdf">
                  <button>Download Report</button>
                </a>              
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        
      </div>
        // <div className="reports-container">
        //     <section className="">
        //         <div className="">
        //             <div data-aos="fade-up" className="">
        //                 <span className="">Reports</span>

        //                 {/* Table Structure */}
        //                 <div className=" ">
        //                     <table className="">
        //                         <thead>
        //                             <tr>
        //                                 <th className="">Serial Number</th>
        //                                 <th className="">Doctor Name</th>
        //                                 <th className="">Doctor Specialty</th>
        //                                 <th className="">View Report</th>
        //                                 <th className="">Download Report</th>
        //                             </tr>
        //                         </thead>
        //                         <tbody>
        //                             { reports && reports.map((report) => (
        //                                 <tr key={report.id} className="">
        //                                     <td className="">{report.id}</td>
        //                                     <td className="">{report.doctorName}</td>
        //                                     <td className="">{report.doctorSpeciality}</td>
        //                                     <td className="">
        //                                         <button
        //                                             onClick={() => handleViewReport(constReportURL)}
        //                                             className=""
        //                                         >
        //                                             View Report
        //                                         </button>
        //                                     </td>
        //                                     <td className="">
        //                                         <button
        //                                             onClick={() => handleDownloadReport(constReportURL)}
        //                                             className=""
        //                                         >
        //                                             Download Report
        //                                         </button>
        //                                     </td>
        //                                 </tr>
        //                             ))}
        //                         </tbody>
        //                     </table>
        //                 </div>
        //             </div>
        //         </div>
        //     </section>
        // </div>
    );
};

export default ReportsLayout;