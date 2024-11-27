import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Salary from '../pages/Salary/SalaryPage';
import AdminSalary from '../pages/Admin/Salary/AdminSalaryPage';
import PostListPage from '../pages/Post/PostListPage'; // 게시글 목록 페이지
import PostDetailPage from '../pages/Post/PostDetailPage'; // 게시글 상세 페이지
import ChatRoomList from '../pages/Chat/ChatRoomList'; // 채팅방 목록
import TodoPage from '../pages/Todo/TodoPage';
import Login from '../pages/Employee/Login'; // 로그인 페이지
import ChatComponent from '../pages/Chat/ChatComponent';
import MyPage from '../pages/Employee/MyPage';
import ChatList from '../pages/Chat/ChatList';
import ChatRoom from '../pages/Chat/ChatRoom';

// 공통 레이아웃이 필요한 라우트 라면 조건 처리
function AppRouter() {
  return (
    <Routes>
      <Route path="/test" element={<ChatComponent />} />
      <Route path="/salary" element={<Salary />} />
      <Route path="/admin/salary" element={<AdminSalary />} />
      <Route path="/post" element={<PostListPage />} />
      <Route path="/post/:postId" element={<PostDetailPage />} />
      <Route path="/chatroom" element={<ChatRoomList />} />
      <Route path="/chatroom/:chatroomId" element={<ChatRoom />} />
      <Route path="/chat" element={<ChatList />} />
      <Route path="/todo" element={<TodoPage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/mypage" element={<MyPage />} />
    </Routes>
  );
}
export default AppRouter;
