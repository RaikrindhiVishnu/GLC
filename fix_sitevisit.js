const fs = require('fs');
let content = fs.readFileSync('src/app/book-site-visit/page.tsx', 'utf8');

// 1. Confirm Visit button - change background to linear gradient
content = content.replace(
  `height: "56px",\n                  background: "#164573",\n                  borderRadius: "9999px",\n                  display: "flex",\n                  alignItems: "center",\n                  justifyContent: "center",\n                  color: "#FFFFFF",\n                  fontFamily: "'Plus Jakarta Sans', sans-serif",\n                  fontWeight: 600,\n                  fontSize: "16px",\n                  border: "none",\n                  cursor: isLoading ? "not-allowed" : "pointer",\n                  marginTop: "10px",\n                  transition: "opacity 0.2s ease",\n                  opacity: isLoading ? 0.7 : 1`,
  `height: "60px",\n                  background: "linear-gradient(135deg, #2780C4 0%, #164573 100%)",\n                  borderRadius: "9999px",\n                  display: "flex",\n                  alignItems: "center",\n                  justifyContent: "center",\n                  color: "#FFFFFF",\n                  fontFamily: "'Plus Jakarta Sans', sans-serif",\n                  fontWeight: 700,\n                  fontSize: "16px",\n                  border: "none",\n                  cursor: isLoading ? "not-allowed" : "pointer",\n                  marginTop: "10px",\n                  transition: "opacity 0.2s ease",\n                  opacity: isLoading ? 0.7 : 1,\n                  boxShadow: "0px 10px 20px rgba(22, 69, 115, 0.3)"`
);

// 2. Available Times - wrap the time picker in a rounded container
// Find the AVAILABLE TIMES label and wrap the content after it
const availableTimesLabel = `}}>AVAILABLE TIMES</span>
                 
                 {/* Custom Time Picker */}`;
const availableTimesLabelReplaced = `}}>AVAILABLE TIMES</span>
                 
                 <div style={{ background: "#F4F3F7", borderRadius: "24px", padding: "16px" }}>
                 {/* Custom Time Picker */}`;
content = content.replace(availableTimesLabel, availableTimesLabelReplaced);

// Find the end of the time picker section and close the wrapper
// The time picker section ends before "Special Requests"
const endOfTimePicker = `                </div>
              </div>

              {/* Special Requests */}`;
const endOfTimePickerReplaced = `                </div>
                </div>{/* end time picker wrapper */}
              </div>

              {/* Special Requests */}`;
content = content.replace(endOfTimePicker, endOfTimePickerReplaced);

fs.writeFileSync('src/app/book-site-visit/page.tsx', content);
console.log('Done!');
