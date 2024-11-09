import React from 'react'
import {
  ArrowUpRight,
  ArrowDownRight,
  ExternalLink,
  Code,
  Megaphone,
  Users
} from 'lucide-react'
import { PieChart, Pie, Cell, ResponsiveContainer, Legend } from 'recharts'

const TreasuryDashboard = () => {
  const spendData = [
    { name: 'Building Tech', value: 11000, color: '#3B82F6', icon: Code },
    { name: 'Marketing', value: 5000, color: '#10B981', icon: Megaphone },
    { name: 'Team', value: 8000, color: '#6366F1', icon: Users }
  ]

  const totalSpend = spendData.reduce((acc, item) => acc + item.value, 0)

  return (
    <div className="w-full min-h-screen bg-white">
      <div className="max-w-7xl mx-auto p-6 space-y-6">
        <h1 className="text-3xl font-bold text-gray-900 mb-6">
          Kleo Network Treasury
        </h1>

        {/* Summary Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Total Funding Card */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4">
            <div className="text-sm text-gray-500 mb-2">Total Funding</div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">$64,000</span>
              <ArrowUpRight className="ml-2 text-green-500" size={20} />
            </div>
          </div>

          {/* Total Spent Card */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4">
            <div className="text-sm text-gray-500 mb-2">Total Spent</div>
            <div className="flex items-baseline">
              <span className="text-2xl font-bold">$24,000</span>
              <ArrowDownRight className="ml-2 text-red-500" size={20} />
            </div>
          </div>

          {/* Remaining Balance Card */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4">
            <div className="text-sm text-gray-500 mb-2">Remaining Balance</div>
            <div className="text-2xl font-bold">$40,000</div>
          </div>
        </div>

        {/* Spend Breakdown */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Pie Chart */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">Spend Breakdown</h2>
            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={spendData}
                    innerRadius={60}
                    outerRadius={80}
                    paddingAngle={5}
                    dataKey="value"
                  >
                    {spendData.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={entry.color} />
                    ))}
                  </Pie>
                  <Legend />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Spend Categories */}
          <div className="bg-gray-50 rounded-lg shadow-sm p-4">
            <h2 className="text-lg font-semibold mb-4">Spend Categories</h2>
            <div className="space-y-4">
              {spendData.map((item, index) => {
                const Icon = item.icon
                const percentage = ((item.value / totalSpend) * 100).toFixed(1)
                return (
                  <div
                    key={index}
                    className="flex items-center justify-between p-3 bg-white rounded-lg"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className="p-2 rounded-full"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon className="text-white" size={20} />
                      </div>
                      <div>
                        <h3 className="font-medium">{item.name}</h3>
                        <p className="text-sm text-gray-500">
                          {percentage}% of total spend
                        </p>
                      </div>
                    </div>
                    <span className="font-semibold">
                      ${item.value.toLocaleString()}
                    </span>
                  </div>
                )
              })}
            </div>
          </div>
        </div>

        {/* Funding Sources */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-4">Funding Sources</h2>
          <div className="space-y-4">
            <div className="flex justify-between items-center p-4 bg-white rounded-lg">
              <div>
                <h3 className="font-medium">Thrive X Polygon Grant</h3>
                <p className="text-sm text-gray-500">Grant</p>
              </div>
              <span className="text-lg font-semibold">$24,000</span>
            </div>

            <div className="flex justify-between items-center p-4 bg-white rounded-lg">
              <div>
                <h3 className="font-medium">Vaibhav Maheshwari</h3>
                <p className="text-sm text-gray-500">Investment</p>
              </div>
              <span className="text-lg font-semibold">$40,000</span>
            </div>
          </div>
        </div>

        {/* Treasury Tracking */}
        <div className="bg-gray-50 rounded-lg shadow-sm p-4">
          <h2 className="text-lg font-semibold mb-4">Treasury Tracking</h2>
          <a
            href="https://zapper.xyz/account/0x86b06319b906e61631f7edbe5a3fe2edb95a3fae"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center text-blue-600 hover:text-blue-800"
          >
            View on Zapper
            <ExternalLink className="ml-2" size={16} />
          </a>
          <div className="mt-2 p-2 bg-white rounded font-mono text-sm">
            0x86b06319b906e61631f7edbe5a3fe2edb95a3fae
          </div>
        </div>
      </div>
    </div>
  )
}

export default TreasuryDashboard
