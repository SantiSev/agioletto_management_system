# Agioletto Management System  
*Production Tracking Solution for Furniture Manufacturing*

![React](https://img.shields.io/badge/React-18.x-blue)  
![TypeScript](https://img.shields.io/badge/TypeScript-5.x-3178C6)  
![TanStack Table](https://img.shields.io/badge/TanStack_Table-v8-FF4154)  

## Overview  
A production tracking system developed for [agioletto](https://agioletto.com/) (Argentinian furniture manufacturer) to enable factory workers to:

✅ Track operational status of products  
📅 Set/update projected completion dates  
✔️ Mark tasks as finished  

## Key Features  
- **Zero Backend Infrastructure** - Leverages Google Sheets as real-time data storage  
- **Custom Apps Script Integration** - Secure CRUD operations via Google Sheets API  
- **Responsive UI** - Built with modern web technologies  
- **Privacy First** - Sensitive endpoints stored in environment variables  

## Technical Specifications  
**Frontend**  
- React 18 + TypeScript  
- TanStack Table v8 for data grid management  
- Tailwind CSS for styling  

**Data Management**  
- Google Sheets API integration  
- Custom Apps Script endpoints  
- Environment variable configuration (.env)  

## Backend Alternative  
`Google Sheets + Apps Script` implementation provides:  
- Real-time data synchronization  
- Familiar spreadsheet interface for managers  
- Cost-effective storage solution  
- Automated workflow triggers  

## Privacy & Security  
- All sensitive credentials stored in `.env`  
- Restricted access to production spreadsheet  
- API endpoint protection via Apps Script validation  
- Business data never exposed to third parties  

## Purpose  
Developed to replace manual tracking systems with:  
➡️ Digital task completion verification  
➡️ Real-time production timeline visibility  
➡️ Centralized order management  
➡️ Mobile-friendly progress updates  

---

*Developed by Santiago Sevitz - 2025*  