import './bubblefromTreding.css';

export default function BubblefromTreding({ posts }) {
    const calculateScale = (likes) => 1 + Math.min(likes / 100, 0.4);

    return (
        <div className='BubbleGroup'>
            {posts.slice(0, 9).map((p, index) => (
                <div
                    key={p.id} // ✅ chave única
                    className='BubbleImg'
                    id={index === 0 ? '' : `position${index}`}
                    style={{
                        transform: `scale(${calculateScale(p.likesCount)})`,
                        animation: `float ${3 + (index % 3)}s ease-in-out infinite`
                    }}
                >
                    <img
                        src={`http://localhost:4000/uploads/users/${p.media}`}
                        alt={p.description}
                        onError={(e) => e.target.src = '/fallback.png'} // fallback
                    />
                </div>
            ))}
        </div>
    );
}

