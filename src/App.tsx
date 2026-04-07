import { motion } from "motion/react";
import { 
  AlertTriangle, 
  Calendar, 
  CheckCircle2, 
  Clock, 
  FileText, 
  TrendingDown, 
  User, 
  XCircle,
  BarChart3,
  PieChart as PieChartIcon,
  Target,
  History
} from "lucide-react";
import { 
  PieChart, 
  Pie, 
  Cell, 
  ResponsiveContainer, 
  BarChart, 
  Bar, 
  XAxis, 
  YAxis, 
  Tooltip,
  Legend
} from "recharts";

const ATTENDANCE_DATA = [
  { name: "Present", value: 12, color: "#10b981" },
  { name: "Absent", value: 3, color: "#ef4444" },
];

const HOMEWORK_DATA = [
  { name: "Completed", value: 1, color: "#10b981" },
  { name: "Incomplete", value: 4, color: "#ef4444" },
];

const AUDIT_TASKS = [
  { date: "05/04", type: "Speaking", status: "completed", label: "Đã hoàn thành" },
  { date: "05/04", type: "Listening", status: "incomplete", label: "CHƯA hoàn thành" },
  { date: "05/04", type: "Speaking 2", status: "incomplete", label: "CHƯA hoàn thành" },
  { date: "06/04", type: "Speaking", status: "incomplete", label: "CHƯA hoàn thành" },
  { date: "07/04", type: "Listening", status: "incomplete", label: "CHƯA hoàn thành (Tài khoản lạ 'hvn')" },
];

const EVIDENCE_IMAGES = [
  { title: "Bài nghe 5/4", src: "https://i.ibb.co/6050vwxS/Screen-Shot-2026-04-07-at-22-07-56.png" },
  { title: "Bài nói 5/4", src: "https://i.ibb.co/W4b3K88f/Screen-Shot-2026-04-07-at-22-08-53.png" },
  { title: "Bài nói 2 5/4", src: "https://i.ibb.co/Y4Df6mc9/Screen-Shot-2026-04-07-at-22-09-45.png" },
  { title: "Speaking 6/4", src: "https://i.ibb.co/Z12bVf0P/Screen-Shot-2026-04-07-at-22-10-36.png" },
  { title: "Bài nghe 7/4", src: "https://i.ibb.co/FQbyHdJ/Screen-Shot-2026-04-07-at-22-11-26.png" },
  { title: "Lịch học & Tiến độ", src: "https://i.ibb.co/nMx3p6RJ/Screen-Shot-2026-04-07-at-22-25-34.png" },
];

export default function App() {
  return (
    <div className="min-h-screen bg-slate-50 font-sans text-slate-900 pb-20">
      {/* Header */}
      <header className="bg-red-600 text-white py-8 px-6 shadow-lg sticky top-0 z-50">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4">
          <div className="flex items-center gap-3">
            <div className="p-2 bg-white/20 rounded-lg backdrop-blur-sm">
              <AlertTriangle className="w-8 h-8 text-white animate-pulse" />
            </div>
            <div>
              <h1 className="text-xl md:text-2xl font-bold uppercase tracking-tight">
                Báo Cáo Kiểm Toán Học Thuật 1A
              </h1>
              <p className="text-red-100 flex items-center gap-2 text-sm mt-1">
                <User className="w-4 h-4" /> Học viên: Mai Hương | <Calendar className="w-4 h-4" /> 19/03/2026 - 07/04/2026
              </p>
            </div>
          </div>
          <div className="bg-white text-red-600 px-4 py-2 rounded-full font-bold text-sm shadow-inner flex items-center gap-2">
            <div className="w-2 h-2 bg-red-600 rounded-full animate-ping" />
            TÌNH TRẠNG: CẢNH BÁO ĐỎ
          </div>
        </div>
      </header>

      <main className="max-w-6xl mx-auto px-6 py-10">
        {/* Overview Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 font-medium text-sm uppercase tracking-wider">Chuyên Cần</h3>
              <Clock className="text-blue-500 w-5 h-5" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">12/15</span>
              <span className="text-slate-400 pb-1">buổi</span>
            </div>
            <p className="text-sm text-red-500 mt-2 font-medium">Vắng 3 buổi | Trễ 5 buổi</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-slate-500 font-medium text-sm uppercase tracking-wider">Bài Tập (3 ngày)</h3>
              <FileText className="text-amber-500 w-5 h-5" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold">20%</span>
              <span className="text-slate-400 pb-1">hoàn thành</span>
            </div>
            <p className="text-sm text-red-500 mt-2 font-medium">4/5 nhiệm vụ chưa xong</p>
          </motion.div>

          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white p-6 rounded-2xl shadow-sm border border-red-100 bg-red-50/30"
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-red-600 font-medium text-sm uppercase tracking-wider">Dự Báo Điểm</h3>
              <TrendingDown className="text-red-600 w-5 h-5" />
            </div>
            <div className="flex items-end gap-2">
              <span className="text-3xl font-bold text-red-600">4.0 - 4.5</span>
              <span className="text-slate-400 pb-1">IELTS</span>
            </div>
            <p className="text-sm text-slate-500 mt-2">Mục tiêu 5.5 (15/05) đang bị đe dọa</p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-10">
          {/* Attendance Audit */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-blue-50 rounded-lg">
                <PieChartIcon className="w-6 h-6 text-blue-600" />
              </div>
              <h2 className="text-xl font-bold">1. Kiểm Toán Thời Gian Lên Lớp</h2>
            </div>
            
            <div className="h-64 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={ATTENDANCE_DATA}
                    cx="50%"
                    cy="50%"
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {ATTENDANCE_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Tooltip />
                  <Legend verticalAlign="bottom" height={36}/>
                </PieChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-4 text-slate-600">
              <div className="flex justify-between items-center p-3 bg-slate-50 rounded-xl">
                <span className="flex items-center gap-2"><Clock className="w-4 h-4" /> Tổng thời lượng thực học</span>
                <span className="font-bold text-slate-900">29.5 / 39h</span>
              </div>
              <div className="flex justify-between items-center p-3 bg-red-50 rounded-xl text-red-700">
                <span className="flex items-center gap-2"><XCircle className="w-4 h-4" /> Thời gian thất thoát</span>
                <span className="font-bold">~10h (3 buổi)</span>
              </div>
              <p className="text-sm italic text-slate-500 mt-4 leading-relaxed">
                👉 Hệ quả: Học sinh đã tự ném bỏ gần 10 tiếng học quý giá. Ở giai đoạn nước rút, sự thất thoát này là không thể bù đắp nếu không có nỗ lực gấp đôi.
              </p>
            </div>
          </section>

          {/* Homework Audit */}
          <section className="bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-amber-50 rounded-lg">
                <BarChart3 className="w-6 h-6 text-amber-600" />
              </div>
              <h2 className="text-xl font-bold">2. Kiểm Toán Bài Tập Về Nhà</h2>
            </div>

            <div className="h-64 w-full mb-6">
              <ResponsiveContainer width="100%" height="100%">
                <BarChart data={HOMEWORK_DATA}>
                  <XAxis dataKey="name" />
                  <YAxis />
                  <Tooltip />
                  <Bar dataKey="value" radius={[4, 4, 0, 0]}>
                    {HOMEWORK_DATA.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Bar>
                </BarChart>
              </ResponsiveContainer>
            </div>

            <div className="space-y-3">
              {AUDIT_TASKS.map((task, idx) => (
                <div key={idx} className="flex items-center justify-between p-3 border border-slate-100 rounded-xl hover:bg-slate-50 transition-colors">
                  <div className="flex items-center gap-3">
                    <span className="text-xs font-mono text-slate-400">{task.date}</span>
                    <span className="font-medium">{task.type}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className={`text-xs px-2 py-1 rounded-full font-medium ${
                      task.status === 'completed' ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'
                    }`}>
                      {task.label}
                    </span>
                    {task.status === 'completed' ? (
                      <CheckCircle2 className="w-5 h-5 text-green-500" />
                    ) : (
                      <XCircle className="w-5 h-5 text-red-500" />
                    )}
                  </div>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Verdict & Ultimatum */}
        <section className="bg-slate-900 text-white p-8 rounded-3xl shadow-xl mb-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Target className="w-32 h-32" />
          </div>
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-6">
              <div className="p-2 bg-white/10 rounded-lg">
                <History className="w-6 h-6 text-red-400" />
              </div>
              <h2 className="text-xl font-bold uppercase tracking-wide">3. Phán Quyết Từ Chuyên Gia (Expert's Verdict)</h2>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="space-y-4">
                <div className="flex items-start gap-4">
                  <div className="w-1 h-12 bg-red-500 rounded-full mt-1" />
                  <div>
                    <p className="text-slate-400 text-sm uppercase font-bold tracking-widest">Tỷ lệ Tuân thủ</p>
                    <p className="text-2xl font-bold text-red-400">Dưới 50%</p>
                  </div>
                </div>
                <p className="text-slate-300 leading-relaxed italic">
                  "Tiêu chuẩn 1A không chấp nhận sự thỏa hiệp với sự chưa tập trung. Với đà này, Mai Hương sẽ cầm chắc Band 4.0 - 4.5, hoàn toàn trượt mục tiêu 5.5."
                </p>
              </div>
              
              <div className="bg-white/5 p-6 rounded-2xl border border-white/10">
                <h4 className="text-red-400 font-bold mb-3 flex items-center gap-2">
                  <AlertTriangle className="w-4 h-4" /> TỐI HẬU THƯ
                </h4>
                <p className="text-slate-200 leading-relaxed">
                  Yêu cầu Mai Hương hoàn thành <span className="text-white font-bold underline">TOÀN BỘ</span> bài tập còn nợ của các ngày 5, 6, 7/4 trước buổi học tiếp theo.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Evidence Gallery */}
        <section>
          <div className="flex items-center gap-3 mb-8">
            <div className="p-2 bg-slate-100 rounded-lg">
              <FileText className="w-6 h-6 text-slate-600" />
            </div>
            <h2 className="text-xl font-bold">Bằng Chứng Kiểm Toán (Evidence)</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {EVIDENCE_IMAGES.map((img, idx) => (
              <motion.div 
                key={idx}
                whileHover={{ y: -5 }}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200"
              >
                <div className="aspect-video bg-slate-100 relative overflow-hidden">
                  <img 
                    src={img.src} 
                    alt={img.title}
                    referrerPolicy="no-referrer"
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center">
                    <button className="bg-white text-slate-900 px-4 py-2 rounded-full text-sm font-bold shadow-lg">
                      Xem Chi Tiết
                    </button>
                  </div>
                </div>
                <div className="p-4 bg-white">
                  <p className="font-bold text-slate-700">{img.title}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="max-w-6xl mx-auto px-6 pt-10 border-t border-slate-200 text-center text-slate-400 text-sm">
        <p>© 2026 Hệ Thống Theo Dõi Thực Chiến - Thầy Trường IELTS</p>
        <p className="mt-1 italic">Dữ liệu được trích xuất tự động và xác thực bởi chuyên gia.</p>
      </footer>
    </div>
  );
}
