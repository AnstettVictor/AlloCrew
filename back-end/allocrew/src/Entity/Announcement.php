<?php

namespace App\Entity;

use Doctrine\Common\Collections\ArrayCollection;
use Doctrine\Common\Collections\Collection;
use Doctrine\ORM\Mapping as ORM;
use Symfony\Component\Serializer\Annotation\Groups;

/**
 * @ORM\Entity(repositoryClass="App\Repository\AnnouncementRepository")
 */
class Announcement
{
    /**
     * @ORM\Id()
     * @ORM\GeneratedValue()
     * @ORM\Column(type="integer")
     * @Groups("announcement")
     * @Groups("discussion")
     */
    private $id;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("announcement")
     */
    private $category;

    /**
     * @ORM\Column(type="boolean")
     * @Groups("announcement")
     */
    private $active;

    /**
     * @ORM\Column(type="boolean")
     * @Groups("announcement")
     */
    private $voluntary;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("announcement")
     */
    private $dateStart;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("announcement")
     */
    private $dateEnd;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("announcement")
     */
    private $location;

    /**
     * @ORM\Column(type="string", length=255)
     * @Groups("announcement")
     * @Groups("discussion")
     */
    private $title;

    /**
     * @ORM\Column(type="text")
     * @Groups("announcement")
     */
    private $description;

    /**
     * @ORM\Column(type="string", length=255, nullable=true)
     * @Groups("announcement")
     */
    private $picture;

    /**
     * @ORM\Column(type="datetime")
     * @Groups("announcement")
     */
    private $createdAt;

    /**
     * @ORM\Column(type="datetime", nullable=true)
     * @Groups("announcement")
     */
    private $updatedAt;

    /**
     * @ORM\ManyToOne(targetEntity="App\Entity\User", inversedBy="announcements")
     * @ORM\JoinColumn(nullable=false)
     * @Groups("announcement")
     */
    private $user;

    /**
     * @ORM\OneToMany(targetEntity="App\Entity\Discussion", mappedBy="announcement", orphanRemoval=true)
     */
    private $discussions;

    public function __construct()
    {
        $this->createdAt = new \DateTime();
        $this->discussions = new ArrayCollection();
    }

    public function getId(): ?int
    {
        return $this->id;
    }

    public function getCategory(): ?string
    {
        return $this->category;
    }

    public function setCategory(string $category): self
    {
        $this->category = $category;

        return $this;
    }

    public function getActive(): ?bool
    {
        return $this->active;
    }

    public function setActive(bool $active): self
    {
        $this->active = $active;

        return $this;
    }

    public function getVoluntary(): ?bool
    {
        return $this->voluntary;
    }

    public function setVoluntary(bool $voluntary): self
    {
        $this->voluntary = $voluntary;

        return $this;
    }

    public function getDateStart(): ?\DateTimeInterface
    {
        return $this->dateStart;
    }

    public function setDateStart(\DateTimeInterface $dateStart): self
    {
        $this->dateStart = $dateStart;

        return $this;
    }

    public function getDateEnd(): ?\DateTimeInterface
    {
        return $this->dateEnd;
    }

    public function setDateEnd(\DateTimeInterface $dateEnd): self
    {
        $this->dateEnd = $dateEnd;

        return $this;
    }

    public function getLocation(): ?string
    {
        return $this->location;
    }

    public function setLocation(string $location): self
    {
        $this->location = $location;

        return $this;
    }

    public function getTitle(): ?string
    {
        return $this->title;
    }

    public function setTitle(string $title): self
    {
        $this->title = $title;

        return $this;
    }

    public function getDescription(): ?string
    {
        return $this->description;
    }

    public function setDescription(string $description): self
    {
        $this->description = $description;

        return $this;
    }

    public function getPicture(): ?string
    {
        return $this->picture;
    }

    public function setPicture(?string $picture): self
    {
        $this->picture = $picture;

        return $this;
    }

    public function getCreatedAt(): ?\DateTimeInterface
    {
        return $this->createdAt;
    }

    public function setCreatedAt(\DateTimeInterface $createdAt): self
    {
        $this->createdAt = $createdAt;

        return $this;
    }

    public function getUpdatedAt(): ?\DateTimeInterface
    {
        return $this->updatedAt;
    }

    public function setUpdatedAt(?\DateTimeInterface $updatedAt): self
    {
        $this->updatedAt = $updatedAt;

        return $this;
    }

    public function getUser(): ?User
    {
        return $this->user;
    }

    public function setUser(?User $user): self
    {
        $this->user = $user;

        return $this;
    }

    /**
     * @return Collection|Discussion[]
     */
    public function getDiscussions(): Collection
    {
        return $this->discussions;
    }

    public function addDiscussion(Discussion $discussion): self
    {
        if (!$this->discussions->contains($discussion)) {
            $this->discussions[] = $discussion;
            $discussion->setAnnouncement($this);
        }

        return $this;
    }

    public function removeDiscussion(Discussion $discussion): self
    {
        if ($this->discussions->contains($discussion)) {
            $this->discussions->removeElement($discussion);
            // set the owning side to null (unless already changed)
            if ($discussion->getAnnouncement() === $this) {
                $discussion->setAnnouncement(null);
            }
        }

        return $this;
    }
}
