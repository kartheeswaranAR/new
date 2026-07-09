import { useMemo, useState } from 'react'
import { useAuth } from '../context/AuthContext'

export function ProfilePage() {
  const { user } = useAuth()
  const [isEditing, setIsEditing] = useState(false)
  const [formData, setFormData] = useState({
    name: user?.name ?? 'Unknown user',
    email: user?.email ?? 'Not available',
    phone: user?.phone ?? '+91-90000-00000',
    photo: user?.profile_image ?? '',
  })

  const hasChanges = useMemo(() => {
    return (
      formData.name !== (user?.name ?? 'Unknown user') ||
      formData.email !== (user?.email ?? 'Not available') ||
      formData.phone !== (user?.phone ?? '+91-90000-00000') ||
      formData.photo !== (user?.profile_image ?? '')
    )
  }, [formData, user])

  function handleChange(event) {
    const { name, value } = event.target
    setFormData((prev) => ({ ...prev, [name]: value }))
  }

  function handleCancel() {
    setIsEditing(false)
    setFormData({
      name: user?.name ?? 'Unknown user',
      email: user?.email ?? 'Not available',
      phone: user?.phone ?? '+91-90000-00000',
      photo: user?.profile_image ?? '',
    })
  }

  function handleSave() {
    setIsEditing(false)
  }

  return (
    <section style={{ padding: '24px', display: 'grid', gap: '16px', color: 'var(--text)' }}>
      <div style={{ background: 'var(--surface)', border: '1px solid var(--stroke)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow)' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', gap: '12px' }}>
          <div>
            <h2 style={{ margin: 0, fontSize: '1.25rem', color: 'var(--text-strong)' }}>My Profile</h2>
            <p style={{ margin: '8px 0 0', color: 'var(--muted)' }}>Manage your profile details for the dashboard workspace.</p>
          </div>
          <button
            type="button"
            onClick={() => (isEditing ? handleCancel() : setIsEditing(true))}
            style={{ padding: '10px 14px', borderRadius: '999px', border: '1px solid var(--stroke)', background: isEditing ? 'var(--surface-elevated)' : 'var(--button-bg)', color: 'var(--button-text)', cursor: 'pointer' }}
          >
            {isEditing ? 'Cancel' : 'Edit'}
          </button>
        </div>
      </div>

      <div style={{ background: 'var(--surface)', border: '1px solid var(--stroke)', borderRadius: '16px', padding: '24px', boxShadow: 'var(--shadow)' }}>
        <div style={{ display: 'grid', gap: '16px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '16px' }}>
            <div style={{ width: '72px', height: '72px', borderRadius: '50%', overflow: 'hidden', border: '1px solid var(--stroke)', background: 'var(--surface-elevated)', display: 'grid', placeItems: 'center' }}>
              {formData.photo ? <img src={formData.photo} alt="Profile" style={{ width: '100%', height: '100%', objectFit: 'cover' }} /> : <span style={{ color: 'var(--muted)' }}>Photo</span>}
            </div>
            <div style={{ flex: 1 }}>
              <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '6px' }}>Photo URL</label>
              <input
                name="photo"
                value={formData.photo}
                onChange={handleChange}
                disabled={!isEditing}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--stroke)', background: isEditing ? 'var(--surface-elevated)' : 'transparent', color: 'var(--text)' }}
              />
            </div>
          </div>

          <div style={{ display: 'grid', gap: '12px', gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))' }}>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '6px' }}>Name</label>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                disabled={!isEditing}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--stroke)', background: isEditing ? 'var(--surface-elevated)' : 'transparent', color: 'var(--text)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '6px' }}>Email</label>
              <input
                name="email"
                value={formData.email}
                onChange={handleChange}
                disabled={!isEditing}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--stroke)', background: isEditing ? 'var(--surface-elevated)' : 'transparent', color: 'var(--text)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '6px' }}>Phone Number</label>
              <input
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                disabled={!isEditing}
                style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--stroke)', background: isEditing ? 'var(--surface-elevated)' : 'transparent', color: 'var(--text)' }}
              />
            </div>
            <div>
              <label style={{ display: 'block', fontSize: '0.9rem', color: 'var(--muted)', marginBottom: '6px' }}>Role</label>
              <input value={user?.role ?? 'Guest'} disabled style={{ width: '100%', padding: '10px 12px', borderRadius: '10px', border: '1px solid var(--stroke)', background: 'transparent', color: 'var(--text)' }} />
            </div>
          </div>

          <div style={{ display: 'flex', justifyContent: 'flex-end', gap: '10px' }}>
            <button type="button" onClick={handleCancel} disabled={!isEditing} style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--stroke)', background: 'transparent', color: 'var(--text)', cursor: isEditing ? 'pointer' : 'not-allowed', opacity: isEditing ? 1 : 0.5 }}>
              Cancel
            </button>
            <button type="button" onClick={handleSave} disabled={!isEditing || !hasChanges} style={{ padding: '10px 14px', borderRadius: '10px', border: '1px solid var(--stroke)', background: isEditing && hasChanges ? 'var(--button-bg)' : 'rgba(148,163,184,0.2)', color: 'var(--button-text)', cursor: isEditing && hasChanges ? 'pointer' : 'not-allowed' }}>
              Save
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
