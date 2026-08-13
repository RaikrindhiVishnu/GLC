const fs = require('fs');

const filePath = "c:\\Users\\DELL\\OneDrive\\Desktop\\GLC\\src\\app\\login\\register\\page.tsx";
let content = fs.readFileSync(filePath, 'utf-8');

// 1. State changes
content = content.replace(
  'const [error, setError] = useState("");', 
  'const [error, setError] = useState("");\n  const [errors, setErrors] = useState<Record<string, string>>({});'
);

// 2. handleCreateAccount logic
const oldValidation = `  const handleCreateAccount = async () => {
    if (!firstName.trim()) {
      setError("Please enter your first name.");
      return;
    }
    if (!lastName.trim()) {
      setError("Please enter your last name.");
      return;
    }
    if (!email.trim()) {
      setError("Please enter your email address.");
      return;
    }
    if (!phone.trim()) {
      setError("Please enter your mobile number.");
      return;
    }`;

const newValidation = `  const handleCreateAccount = async () => {
    const newErrors: Record<string, string> = {};
    if (!firstName.trim()) newErrors.firstName = "First name is required.";
    if (!lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!email.trim()) newErrors.email = "Email is required.";
    if (!phone.trim()) newErrors.phone = "Mobile number is required.";
    if (!preferredState) newErrors.state = "Preferred Investment State is required.";

    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
      setError("Please fill all mandatory fields.");
      return;
    }
    setErrors({});`;

content = content.replace(oldValidation, newValidation);

// 3. Input formatting - First Name
content = content.replace(
    'onChange={(e) => setFirstName(e.target.value)}',
    'onChange={(e) => { setFirstName(e.target.value); if (errors.firstName) setErrors(prev => ({ ...prev, firstName: "" })); }}'
);
content = content.replace(
    '<div className="flex-1 bg-white border border-[#F0F0F0] rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm">\\n          <Image src="/assets/login/hugeicons_profile.svg" alt="First Name"',
    '<div className={`flex-1 bg-white border ${errors.firstName ? "border-red-500" : "border-[#F0F0F0]"} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}>\\n          <Image src="/assets/login/hugeicons_profile.svg" alt="First Name"'
);
content = content.replace(
    '<div className="flex-1 bg-white border border-[#F0F0F0] rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm">\n          <Image src="/assets/login/hugeicons_profile.svg" alt="First Name"',
    '<div className={`flex-1 bg-white border ${errors.firstName ? "border-red-500" : "border-[#F0F0F0]"} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}>\n          <Image src="/assets/login/hugeicons_profile.svg" alt="First Name"'
);

// 4. Input formatting - Last Name
content = content.replace(
    'onChange={(e) => setLastName(e.target.value)}',
    'onChange={(e) => { setLastName(e.target.value); if (errors.lastName) setErrors(prev => ({ ...prev, lastName: "" })); }}'
);
content = content.replace(
    '<div className="flex-1 bg-white border border-[#F0F0F0] rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm">\n          <Image src="/assets/login/hugeicons_profile.svg" alt="Last Name"',
    '<div className={`flex-1 bg-white border ${errors.lastName ? "border-red-500" : "border-[#F0F0F0]"} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}>\n          <Image src="/assets/login/hugeicons_profile.svg" alt="Last Name"'
);

// Add errors below First/Last Name
content = content.replace(
    '</motion.div>\n\n      {/* Email */}',
    '</motion.div>\n      <div className="flex gap-2 mb-2 lg:mb-3 px-4">\n        <div className="flex-1 text-red-500 text-[12px] font-jakarta">{errors.firstName}</div>\n        <div className="flex-1 text-red-500 text-[12px] font-jakarta">{errors.lastName}</div>\n      </div>\n\n      {/* Email */}'
);

// 5. Input formatting - Email
content = content.replace(
    'onChange={(e) => setEmail(e.target.value)}',
    'onChange={(e) => { setEmail(e.target.value); if (errors.email) setErrors(prev => ({ ...prev, email: "" })); }}'
);
content = content.replace(
    'className="mb-2 lg:mb-3 bg-white border border-[#F0F0F0] rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm"',
    'className={`mb-1 bg-white border ${errors.email ? "border-red-500" : "border-[#F0F0F0]"} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}'
);
content = content.replace(
    '</motion.div>\n\n      {/* Mobile Number Split Layout */}',
    '</motion.div>\n      {errors.email && <div className="text-red-500 text-[12px] font-jakarta mb-2 lg:mb-3 px-4">{errors.email}</div>}\n\n      {/* Mobile Number Split Layout */}'
);

// 6. Input formatting - Phone
content = content.replace(
    'onChange={(e) => setPhone(e.target.value.replace(/\\D/g, \\\'\\\'))}',
    'onChange={(e) => { setPhone(e.target.value.replace(/\\D/g, \\\'\\\')); if (errors.phone) setErrors(prev => ({ ...prev, phone: "" })); }}'
);
content = content.replace(
    'className="flex-1 bg-white border border-[#F0F0F0] rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm">\n          <input \n            type="tel"',
    'className={`flex-1 bg-white border ${errors.phone ? "border-red-500" : "border-[#F0F0F0]"} rounded-full h-[46px] lg:h-[50px] flex items-center px-4 gap-2 focus-within:border-[#2780C4] focus-within:ring-1 focus-within:ring-[#2780C4]/20 transition-all cursor-text shadow-sm`}>\n          <input \n            type="tel"'
);
content = content.replace(
    'className="relative mb-5 lg:mb-6 flex gap-2 group"',
    'className="relative mb-1 flex gap-2 group"'
);
content = content.replace(
    '</motion.div>\n\n      {/* Preferred Investment State */}',
    '</motion.div>\n      {errors.phone && <div className="text-red-500 text-[12px] font-jakarta mb-5 lg:mb-6 pl-[80px]">{errors.phone}</div>}\n\n      {/* Preferred Investment State */}'
);

// 7. Input formatting - State
content = content.replace(
    'className={`w-full bg-[#FEFEFE] border-[2px] ${isStateDropdownOpen ? \\\'border-[#2780C4] ring-1 ring-[#2780C4]/20\\\' : \\\'border-[#F8F8F8]\\\'} rounded-[30px] h-[64px] flex items-center px-6 gap-2 transition-all shadow-sm relative`}',
    'className={`w-full bg-[#FEFEFE] border-[2px] ${errors.state ? "border-red-500" : isStateDropdownOpen ? "border-[#2780C4] ring-1 ring-[#2780C4]/20" : "border-[#F8F8F8]"} rounded-[30px] h-[64px] flex items-center px-6 gap-2 transition-all shadow-sm relative`}'
);
content = content.replace(
    "onClick={() => { setPreferredState(state); setIsStateDropdownOpen(false); }}",
    "onClick={() => { setPreferredState(state); setIsStateDropdownOpen(false); if (errors.state) setErrors(prev => ({ ...prev, state: '' })); }}"
);
content = content.replace(
    'className="mb-5 lg:mb-6 relative"',
    'className="mb-1 relative"'
);
content = content.replace(
    '</motion.div>\n\n      {error && (',
    '</motion.div>\n      {errors.state && <div className="text-red-500 text-[12px] font-jakarta mb-5 lg:mb-6 px-4">{errors.state}</div>}\n\n      {error && ('
);

fs.writeFileSync(filePath, content, 'utf-8');
console.log("Validation script applied successfully.");
