import React, { useEffect, useState } from 'react';
import PendingVacationList from '../../../components/Admin/PendingVacationList'
import VacationStatusList from '../../../components/Admin/VacationStatusList';

const AdminVacationPage = () => {
    const [activeTab, setActiveTab] = useState('pending');

    return (
        <div className="admin-vacation-page">
            <div className="admin-section-content">
                <h2>사원 휴가 관리</h2>
                
                <div className="admin-section-tabs">
                    <button 
                        className={`admin-section-tab ${activeTab === 'pending' ? 'active' : ''}`}
                        onClick={() => setActiveTab('pending')}
                    >
                        승인 대기 휴가 목록
                    </button>
                    <button 
                        className={`admin-section-tab ${activeTab === 'status' ? 'active' : ''}`}
                        onClick={() => setActiveTab('status')}
                    >
                        휴가 보유 현황
                    </button>
                </div>

                {activeTab === 'pending' ? (
                    <PendingVacationList />
                ) : (
                    <VacationStatusList />
                )}
            </div>
        </div>
    );
}

export default AdminVacationPage;