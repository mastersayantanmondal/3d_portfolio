-- Seed data for 3D Animation Portfolio
-- This script populates the database with sample data

-- Insert sample projects
INSERT INTO projects (title, description, category, image_url, video_url, technologies, featured) VALUES
('Cyberpunk Character Animation', 'High-quality character animation for a cyberpunk-themed game featuring complex rigging and motion capture integration.', 'Character Animation', '/placeholder.svg?height=300&width=400', 'https://example.com/video1', ARRAY['Maya', 'MotionBuilder', 'Substance Painter'], true),
('Architectural Visualization', 'Photorealistic architectural visualization with dynamic lighting and atmospheric effects.', 'Architectural Viz', '/placeholder.svg?height=300&width=400', NULL, ARRAY['Blender', 'Cycles', 'After Effects'], true),
('VR Experience Design', 'Immersive VR experience with interactive 3D environments and spatial audio integration.', 'VR/AR', '/placeholder.svg?height=300&width=400', NULL, ARRAY['Unity', 'C#', 'Blender', 'VRTK'], true),
('Product Visualization', 'Commercial product visualization for e-commerce and marketing campaigns.', 'Product Viz', '/placeholder.svg?height=300&width=400', NULL, ARRAY['Cinema 4D', 'Octane', 'Photoshop'], false),
('Game Cinematic Sequence', 'Epic cinematic sequence for AAA game title with advanced particle effects.', 'Cinematics', '/placeholder.svg?height=300&width=400', 'https://example.com/video2', ARRAY['Maya', 'Houdini', 'Nuke'], false),
('Medical Animation', 'Educational medical animation explaining complex biological processes.', 'Medical/Scientific', '/placeholder.svg?height=300&width=400', NULL, ARRAY['Maya', 'ZBrush', 'After Effects'], false);

-- Insert sample blog posts
INSERT INTO blog_posts (title, excerpt, content, image_url, read_time, category) VALUES
('The Future of Real-Time Rendering in 3D Animation', 'Exploring how real-time rendering technologies are revolutionizing the 3D animation industry.', 'Real-time rendering has transformed from a gaming-exclusive technology to a cornerstone of modern 3D animation production. With engines like Unreal Engine and Unity leading the charge, artists can now see their work come to life instantly, dramatically reducing iteration times and enabling more creative experimentation.

The implications of this shift are profound. Traditional render farms that once required hours or days to process a single frame are being supplemented—and in some cases replaced—by real-time solutions that deliver comparable quality in milliseconds. This democratization of high-quality rendering is opening doors for smaller studios and independent artists who previously couldn''t afford expensive rendering infrastructure.

Key advantages of real-time rendering include:
- Immediate feedback during the creative process
- Interactive lighting and camera adjustments
- Reduced production costs and timelines
- Enhanced collaboration between departments
- New possibilities for interactive and immersive content

However, challenges remain. While real-time rendering excels in many areas, achieving the absolute highest quality still often requires traditional offline rendering techniques. The key is understanding when to use each approach and how to integrate them effectively into modern production pipelines.

As we look to the future, the line between real-time and offline rendering continues to blur. Technologies like ray tracing in real-time, AI-assisted rendering, and cloud-based GPU computing are pushing the boundaries of what''s possible. For 3D artists, staying current with these developments isn''t just beneficial—it''s essential for remaining competitive in an rapidly evolving industry.', '/placeholder.svg?height=300&width=400', 8, 'Technology'),

('Character Rigging Best Practices', 'Essential techniques and workflows for creating robust character rigs that animators love.', 'Character rigging is the invisible foundation that makes great animation possible. A well-designed rig can elevate an animator''s work, while a poor rig can make even simple movements feel labored and unnatural. After years of rigging characters for games, films, and interactive media, I''ve learned that the best rigs share several key characteristics.

First and foremost, a good rig is intuitive. Animators shouldn''t need extensive documentation to understand how to use your rig. Controls should be logically placed, clearly labeled, and behave predictably. If an animator has to think about the rig instead of the performance, you''ve already lost half the battle.

Performance is equally critical. In production environments, animators work with multiple characters simultaneously, often in complex scenes. A rig that slows down the viewport or crashes Maya during playback will quickly become a bottleneck. Optimization isn''t just about polygon count—it''s about efficient deformation algorithms, smart constraint setups, and knowing when to use expressions versus direct connections.

Here are my essential rigging principles:

1. **Plan Before You Build**: Understand the character''s role, the types of animation required, and any technical constraints before placing the first joint.

2. **Modular Construction**: Build rigs in components that can be easily modified or replaced. This approach saves countless hours when directors request changes or when bugs are discovered.

3. **Consistent Naming**: Develop and stick to a naming convention. Future you (and your colleagues) will thank you when debugging complex rig hierarchies.

4. **Test Early and Often**: Don''t wait until the rig is "complete" to start testing. Regular animation tests reveal issues that aren''t apparent in static poses.

5. **Document Everything**: Create clear documentation for animators, including control purposes, expected ranges, and any special behaviors or limitations.

The rigging landscape continues to evolve with new tools and techniques. Machine learning is beginning to influence rigging workflows, procedural rigging systems are becoming more sophisticated, and real-time engines are demanding new approaches to character setup. Staying current with these developments while maintaining solid fundamentals is the key to long-term success in character rigging.', '/placeholder.svg?height=300&width=400', 12, 'Tutorial'),

('Breaking Into the 3D Animation Industry', 'A comprehensive guide for aspiring 3D artists looking to start their careers in animation.', 'The 3D animation industry can seem daunting to newcomers, but with the right approach and dedication, it''s more accessible than ever. The democratization of 3D software, online learning resources, and remote work opportunities have created new pathways into the industry that didn''t exist even a decade ago.

**Building Your Foundation**

Start with the fundamentals. While it''s tempting to jump straight into the latest software features, understanding core principles of animation, composition, and storytelling will serve you throughout your career. The 12 principles of animation aren''t just historical curiosities—they''re the foundation upon which all great animation is built.

Choose your specialization thoughtfully. The 3D industry is highly specialized, with distinct career paths for modelers, riggers, animators, lighters, and technical directors. While being a generalist has value, especially early in your career, developing deep expertise in one area will make you more valuable to employers.

**Software and Skills**

Master industry-standard software, but don''t become software-dependent. Maya, Blender, Houdini, and other tools are means to an end, not the end itself. Focus on understanding the underlying concepts—topology, UV mapping, rigging principles, lighting theory—that translate across all software packages.

Develop both artistic and technical skills. The most successful 3D artists I know can script simple tools, understand render pipelines, and troubleshoot technical issues. You don''t need to be a programmer, but basic scripting knowledge will set you apart from the competition.

**Building Your Portfolio**

Quality over quantity, always. A portfolio with three exceptional pieces will outperform one with twenty mediocre examples. Each piece should demonstrate specific skills and show your best work. Include breakdowns that explain your process, challenges you overcame, and techniques you used.

Tailor your portfolio to your target role. A character animator''s reel should focus on performance and personality, while a technical artist''s portfolio might emphasize problem-solving and tool development. Research the studios you want to work for and understand what they value.

**Networking and Community**

Engage with the 3D community online and offline. Participate in forums, attend conferences, and contribute to open-source projects. The 3D community is generally welcoming and supportive of newcomers who show genuine enthusiasm and respect for the craft.

Consider starting with smaller studios or freelance work. While everyone dreams of working at Pixar or ILM, smaller studios often provide better learning opportunities and more diverse experience. Many successful artists built their careers by moving between studios, learning different approaches and building their networks.

**Staying Current**

The 3D industry evolves rapidly. New software, techniques, and workflows emerge constantly. Develop a habit of continuous learning through online courses, tutorials, and experimentation. Follow industry leaders on social media, read trade publications, and attend virtual conferences when possible.

Remember that breaking into the industry is just the beginning. Building a sustainable career requires continuous growth, adaptation, and passion for the craft. The most successful 3D artists I know are those who never stop learning and pushing their creative boundaries.', '/placeholder.svg?height=300&width=400', 15, 'Career');

-- Insert sample skills
INSERT INTO skills (name, category, level, years_experience) VALUES
('Maya', '3D Software', 95, 5),
('Blender', '3D Software', 90, 4),
('Cinema 4D', '3D Software', 85, 3),
('Houdini', '3D Software', 75, 2),
('ZBrush', '3D Software', 80, 3),
('Unreal Engine', 'Game Engines', 88, 4),
('Unity', 'Game Engines', 82, 3),
('Godot', 'Game Engines', 65, 1),
('After Effects', 'Post-Production', 92, 5),
('Premiere Pro', 'Post-Production', 85, 4),
('DaVinci Resolve', 'Post-Production', 70, 2),
('Nuke', 'Post-Production', 75, 2),
('Python', 'Programming', 85, 4),
('JavaScript', 'Programming', 80, 3),
('C#', 'Programming', 75, 3),
('MEL Script', 'Programming', 90, 4),
('HLSL/GLSL', 'Programming', 70, 2);

-- Insert sample testimonials
INSERT INTO testimonials (client_name, client_title, client_company, content, rating, featured) VALUES
('Sarah Chen', 'Creative Director', 'Digital Dreams Studio', 'Alex delivered exceptional character animations that brought our game to life. His attention to detail and ability to capture personality in movement is outstanding.', 5, true),
('Michael Rodriguez', 'Producer', 'Indie Game Collective', 'Working with Alex was a pleasure. He understood our vision immediately and delivered high-quality work on time and within budget.', 5, true),
('Emma Thompson', 'Marketing Director', 'TechCorp Solutions', 'The product visualizations Alex created for our campaign exceeded all expectations. The attention to detail and photorealistic quality helped drive significant sales growth.', 5, false),
('David Park', 'Film Director', 'Independent Films', 'Alex''s VFX work added the perfect touch of magic to our film. His technical expertise and creative vision made the impossible look effortless.', 4, false);
